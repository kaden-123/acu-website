function Hero() {  
  return (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-transparent opacity-75"></div>
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-2xl fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Journey to wellness begins here.</h1>
        </div>
      </div>
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540202404-5a3b74a838cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center z-0"></div>
  </div>
  );
}

export default Hero;