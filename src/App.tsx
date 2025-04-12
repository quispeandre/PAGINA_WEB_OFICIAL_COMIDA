import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Star, Clock, MapPin, Phone, Instagram, Facebook, Twitter, ChefHat, Award, Utensils, Truck, Gift, Users, Coffee, Pizza, Sandwich, Salad, IceCream, Beef, Drumstick } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const sections = ['home', 'menu', 'especiales', 'galeria', 'nosotros', 'servicios', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.menu-item, .animate-on-scroll').forEach(item => {
        observer.observe(item);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { id: 'all', name: 'Todo', icon: Utensils },
    { id: 'burgers', name: 'Hamburguesas', icon: Beef },
    { id: 'chicken', name: 'Pollo', icon: Drumstick },
    { id: 'sides', name: 'Complementos', icon: Salad },
    { id: 'desserts', name: 'Postres', icon: IceCream },
  ];

  const menuItems = [
    {
      name: "Hamburguesa BBQ Ahumada",
      price: "$12.99",
      description: "Carne Angus, tocino crujiente, queso cheddar, salsa BBQ",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
      badges: ["Más Vendido", "Elección del Chef"],
      category: "burgers"
    },
    {
      name: "Pollo Picante Nashville",
      price: "$11.99",
      description: "Pollo crujiente picante, pepinillos, salsa especial",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
      badges: ["Picante", "Popular"],
      category: "chicken"
    },
    {
      name: "Hamburguesa de Hongos y Trufa",
      price: "$14.99",
      description: "Queso suizo, hongos salteados, aioli de trufa",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
      badges: ["Premium", "Opción Vegetariana"],
      category: "burgers"
    },
    {
      name: "Pollo Glaseado con Miel",
      price: "$13.99",
      description: "Glaseado dulce y picante, ensalada asiática",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      badges: ["Nuevo", "Especial de la Casa"],
      category: "chicken"
    },
    {
      name: "Papas Dulces Cargadas",
      price: "$7.99",
      description: "Salsa de queso, tocino, cebolla verde",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
      badges: ["Popular", "Para Compartir"],
      category: "sides"
    },
    {
      name: "Pastel de Chocolate Fundido",
      price: "$8.99",
      description: "Pastel caliente de chocolate, helado de vainilla",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80",
      badges: ["Postre", "Favorito de Instagram"],
      category: "desserts"
    }
  ];

  const specialFeatures = [
    {
      icon: <ChefHat className="w-12 h-12" />,
      title: "Chefs Expertos",
      description: "Expertos culinarios con pasión"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Calidad Primero",
      description: "Solo ingredientes premium"
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Sabor Perfecto",
      description: "Elaborado con excelencia"
    }
  ];

  const services = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Entrega Rápida",
      description: "Entrega rápida y confiable a tu puerta"
    },
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Eventos Especiales",
      description: "Catering para todas tus ocasiones especiales"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Comedor Privado",
      description: "Espacio exclusivo para tus reuniones"
    }
  ];

  const dailySpecials = [
    {
      day: "Lunes",
      deal: "2x1 en Hamburguesas",
      icon: <Beef className="w-6 h-6" />
    },
    {
      day: "Martes",
      deal: "50% de Descuento en Alitas",
      icon: <Drumstick className="w-6 h-6" />
    },
    {
      day: "Miércoles",
      deal: "Niños Comen Gratis",
      icon: <Pizza className="w-6 h-6" />
    },
    {
      day: "Jueves",
      deal: "Postre Gratis con Plato Principal",
      icon: <IceCream className="w-6 h-6" />
    },
    {
      day: "Viernes",
      deal: "Happy Hour 4-7PM",
      icon: <Coffee className="w-6 h-6" />
    },
    {
      day: "Fin de Semana",
      deal: "Menú Especial de Brunch",
      icon: <Sandwich className="w-6 h-6" />
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      title: "Interior del Restaurante"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      title: "Ambiente Acogedor"
    },
    {
      url: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80",
      title: "Cocina en Vivo"
    },
    {
      url: "https://images.unsplash.com/photo-1560053608-13721e0d69e8?auto=format&fit=crop&w=800&q=80",
      title: "Eventos Privados"
    }
  ];

  const filteredMenuItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className={`min-h-screen bg-black text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl group">
              <span className="text-yellow-400">IMPULSA</span> TU <span className="text-white group-hover:text-yellow-400 transition-colors">NEGOCIO</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'menu', label: 'Menú' },
                { id: 'especiales', label: 'Especiales' },
                { id: 'galeria', label: 'Galería' },
                { id: 'nosotros', label: 'Nosotros' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${
                    activeSection === item.id
                      ? 'text-yellow-400'
                      : 'text-white hover:text-yellow-400'
                  } transition-all duration-300 transform hover:scale-110`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {[
                { id: 'home', label: 'Inicio' },
                { id: 'menu', label: 'Menú' },
                { id: 'especiales', label: 'Especiales' },
                { id: 'galeria', label: 'Galería' },
                { id: 'nosotros', label: 'Nosotros' },
                { id: 'servicios', label: 'Servicios' },
                { id: 'contacto', label: 'Contacto' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block px-3 py-2 text-white hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
        <section id="home" className="relative flex items-center justify-center overflow-hidden min-h-screen">
          <div
            className="absolute inset-0 bg-cover bg-center z-0 parallax"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&w=2000&q=80')",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="relative z-30 pt-16 pb-8 px-4 text-center md:pt-32 mobile-padding">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 opacity-0 animate-[slide-up_1s_ease-out_0.3s_forwards]">
              Saborea lo
              <span className="text-yellow-400 block md:inline mt-2 md:mt-0 animate-pulse-glow">
                Extraordinario
              </span>
            </h1>

            <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto opacity-0 animate-[slide-up_1s_ease-out_0.6s_forwards]">
              Experimenta nuestras legendarias hamburguesas y pollo, elaborados con pasión y servidos con estilo
            </p>

            <a
              href="#menu"
              className="inline-flex items-center bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-110 opacity-0 animate-[slide-up_1s_ease-out_0.9s_forwards]"
            >
              Ver Menú <ChevronRight className="ml-2" />
            </a>
          </div>
        </section>

        {/* Sección de características especiales */}
        <section className="bg-gradient-to-t from-black to-transparent py-12 mt-32">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center opacity-0 animate-[slide-up_1s_ease-out_1.2s_forwards]"
                  style={{ animationDelay: `${1.2 + index * 0.2}s` }}
                >
                  <div className="text-yellow-400 mb-4 transform hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>




      {/* Menu Section */}
      <section id="menu" className="py-20 px-4" ref={menuRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestros <span className="text-yellow-400">Platillos</span> Especiales
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-yellow-400 text-black'
                      : 'bg-zinc-800 text-white hover:bg-zinc-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredMenuItems.map((item, index) => (
              <div
                key={index}
                className="menu-item group relative overflow-hidden rounded-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end transform transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.badges.map((badge, badgeIndex) => (
                      <span
                        key={badgeIndex}
                        className="px-3 py-1 bg-yellow-400 text-black text-sm font-semibold rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 mb-2 transform group-hover:translate-x-2 transition-transform duration-300">
                    {item.description}
                  </p>
                  <p className="text-yellow-400 font-bold text-xl transform group-hover:scale-110 transition-transform duration-300">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Specials Section */}
      <section id="especiales" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Especiales <span className="text-yellow-400">Diarios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dailySpecials.map((special, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-black p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 p-3 rounded-full mr-4">
                    {special.icon}
                  </div>
                  <h3 className="text-xl font-bold">{special.day}</h3>
                </div>
                <p className="text-gray-300">{special.deal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestro <span className="text-yellow-400">Ambiente</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="animate-on-scroll relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Nuestra <span className="text-yellow-400">Historia</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Desde 2015, hemos estado perfeccionando nuestro arte, combinando técnicas tradicionales con sabores innovadores. Nuestro compromiso con ingredientes de calidad y servicio excepcional nos ha convertido en un destino favorito para los amantes de la comida.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-black rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2 animate-pulse" />
                  <p className="font-bold">4.9/5</p>
                  <p className="text-sm text-gray-400">Calificación</p>
                </div>
                <div className="p-4 bg-black rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                  <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2 animate-pulse" />
                  <p className="font-bold">15k+</p>
                  <p className="text-sm text-gray-400">Clientes</p>
                </div>
                <div className="p-4 bg-black rounded-lg transform hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-yellow-400/20">
                  <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-2 animate-pulse" />
                  <p className="font-bold">3</p>
                  <p className="text-sm text-gray-400">Locales</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?auto=format&fit=crop&w=800&q=80"
                alt="Interior del restaurante"
                className="rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Nuestros <span className="text-yellow-400">Servicios</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-zinc-900 p-8 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20"
              >
                <div className="text-yellow-400 mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Ponte en <span className="text-yellow-400">Contacto</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Visítanos</h3>
                <div className="flex items-center mb-4 hover:translate-x-2 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-yellow-400 mr-3" />
                  <p>Calle Foodie 123, Ciudad Cuisine, FC 12345</p>
                </div>
                <div className="flex items-center mb-4 hover:translate-x-2 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-yellow-400 mr-3" />
                  <p>Lun-Dom: 11:00 AM - 10:00 PM</p>
                </div>
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-yellow-400 mr-3" />
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-yellow-400 hover:text-yellow-300 transform hover:scale-125 transition-all duration-300"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-yellow-400 hover:text-yellow-300 transform hover:scale-125 transition-all duration-300"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-yellow-400 hover:text-yellow-300 transform hover:scale-125 transition-all duration-300"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
                <input
                  type="text"
                  placeholder="Tu Nombre"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                />
              </div>
              <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
                <input
                  type="email"
                  placeholder="Tu Email"
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                />
              </div>
              <div className="transform hover:translate-y-[-2px] transition-transform duration-300">
                <textarea
                  placeholder="Tu Mensaje"
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;