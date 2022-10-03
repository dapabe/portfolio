export default function Modal({ children, isOpen }) {
  return (
    isOpen && (
      <div className="fixed inset-0 z-30 flex bg-black/95 [&>*]:mx-auto [&>*]:my-auto">
        {children}
      </div>
    )
  );
}
