import { create } from "zustand";

type LoginModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;

let a = [
  {
    source: "Cart",
    destination: "Order",
    trace_id: "TraceID_2",
    span_id: "SpanID_2_1",
    parent_span_id: null,
  },
  {
    source: "Order",
    destination: "Inventory",
    trace_id: "TraceID_2",
    span_id: "SpanID_2_2",
    parent_span_id: "SpanID_2_1",
  },
  {
    source: "Order",
    destination: "Shipping",
    trace_id: "TraceID_2",
    span_id: "SpanID_2_3",
    parent_span_id: "SpanID_2_1",
  },
  {
    source: "Inventory",
    destination: "Product",
    trace_id: "TraceID_2",
    span_id: "SpanID_2_4",
    parent_span_id: "SpanID_2_2",
  },
];
