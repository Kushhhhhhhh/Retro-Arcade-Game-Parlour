const DecorativeBorders = () => (
    <>
      <div className="fixed inset-x-0 top-0 h-6 bg-[#FF00FF] z-50"></div>
      <div className="fixed inset-y-0 left-0 w-6 bg-[#00FFFF] z-50"></div>
      <div className="fixed inset-x-0 bottom-0 h-6 bg-[#00FFFF] z-50"></div>
      <div className="fixed inset-y-0 right-0 w-6 bg-[#FFFF00] z-50"></div>
  
      <div className="fixed top-0 left-0 w-16 h-16 bg-[#FFFF00] z-50"></div>
      <div className="fixed top-0 right-0 w-16 h-16 bg-[#FF00FF] z-50"></div>
      <div className="fixed bottom-0 left-0 w-16 h-16 bg-[#FF00FF] z-50"></div>
      <div className="fixed bottom-0 right-0 w-16 h-16 bg-[#00FFFF] z-50"></div>
    </>
  );
  
  export default DecorativeBorders;  