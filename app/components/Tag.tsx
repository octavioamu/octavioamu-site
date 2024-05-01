const Tag = ({ children }: { children: string }) => {
  return (
    <div className="bg-[#f9c510]  text-sm rounded-full py-1 px-2 ">
      {children}
    </div>
  );
};

export default Tag;
