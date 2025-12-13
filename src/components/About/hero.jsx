
function AboutHero() {
  return (
    <>
      <section
        className="bg-[url('https://images.unsplash.com/photo-1666843527155-14ec5f016802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBza3lsaW5lfGVufDF8fHx8MTc2NTI2ODI3NHww&ixlib=rb-4.1.0&q=80&w=1080')] text-white py-20 px-4 text-center bg-cover bg-center h-150 flex items-center justify-center relative bg-fixed"
      >
         <div className="absolute inset-0 bg-black/50"></div>
        <div className="p-8 rounded-lg z-0 w-full  flex flex-col items-center justify-center">
          <div className="mt-8">
            <h1 className="text-6xl mx-auto">Meet the Team Behind <br/> ThreadVerse</h1>
            <br />
            <h1 className="mx-auto max-w-full text-2xl text-white/80">Learn more about our mission, vision, and values.</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHero;

