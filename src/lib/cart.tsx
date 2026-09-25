import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { getProduct, type Product } from "./products";

export type CartLine = { id: string; quantity: number };

type CartContextValue = {
  lines: CartLine[];
  items: Array<{ product: Product; quantity: number }>;
  count: number;
  total: number;
  add: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "creme-co-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* ignore quota errors */
    }
  }, [lines]);

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((line) => {
        const product = getProduct(line.id);
        return product ? { product, quantity: line.quantity } : null;
      })
      .filter((x): x is { product: Product; quantity: number } => x !== null);

    return {
      lines,
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      total: items.reduce((sum, i) => sum + i.quantity * i.product.price, 0),
      add: (productId, quantity = 1) => {
        const product = getProduct(productId);
        setLines((prev) => {
          const existing = prev.find((l) => l.id === productId);
          if (existing) {
            return prev.map((l) =>
              l.id === productId ? { ...l, quantity: l.quantity + quantity } : l,
            );
          }
          return [...prev, { id: productId, quantity }];
        });
        if (product) {
          toast.success(`${product.name} added to your order`, {
            description: "Head to Order Online to review your cart.",
          });
        }
      },
      setQuantity: (productId, quantity) =>
        setLines((prev) =>
          quantity <= 0
            ? prev.filter((l) => l.id !== productId)
            : prev.map((l) => (l.id === productId ? { ...l, quantity } : l)),
        ),
      remove: (productId) => {
        const product = getProduct(productId);
        setLines((prev) => prev.filter((l) => l.id !== productId));
        if (product) toast(`${product.name} removed from your order`);
      },
      clear: () => setLines([]),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
