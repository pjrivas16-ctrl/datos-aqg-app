import React from 'react';

// Fix: Changed the type of the 'icon' prop from JSX.Element to React.ReactNode to resolve a TypeScript namespace error.
const ToolCard: React.FC<{ title: string; description: string; details: React.ReactNode; icon: React.ReactNode; }> = ({ title, description, details, icon }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/80 flex flex-col text-center">
        <div className="w-14 h-14 bg-teal-100 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
           {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800 tracking-tight mb-2">{title}</h3>
        <p className="flex-grow text-slate-500 mb-4 text-sm">{description}</p>
        <div className="bg-slate-100 border border-slate-200 text-slate-700 p-3 rounded-lg text-left mt-auto">
            <div className="font-semibold text-xs">{details}</div>
        </div>
    </div>
);


const CommercialConditionsPage: React.FC = () => {
    
    return (
        <div className="animate-fade-in h-full">
            <h2 className="text-2xl font-extrabold text-slate-800 tracking-tight mb-2">Promociones</h2>
            <p className="text-slate-500 mb-6">Aquí encontrarás las promociones y argumentos de venta activos que puedes ofrecer a tus clientes.</p>
            
            <div className="flex flex-col gap-6">
                {/* Card 1: Welcome Offer */}
                <ToolCard
                    title="Oferta de Bienvenida"
                    description="Dirigida a nuevos clientes o a la recuperación de clientes con más de un año de inactividad. Utiliza esta potente oferta para conseguir tu primera venta, abrir nuevas cuentas o reactivar clientes perdidos."
                    details={
                        <div>
                            <p className="font-bold mb-2">Argumento de venta (dos opciones):</p>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>
                                    <strong>Opción Estándar:</strong> Ofrecer en todos los productos un 50%+25% durante <strong>2 meses ó hasta 5000€</strong> de compra, lo que antes ocurra.
                                </li>
                                <li>
                                    <strong>Opción Ampliada:</strong> Si el cliente adquiere también el <strong>Pack Expositor</strong>, la oferta se amplía a <strong>3 meses ó hasta 7500€</strong> de compra, lo que antes ocurra.
                                </li>
                            </ol>
                        </div>
                    }
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    }
                />

                {/* Card 2: Display Stand Offer */}
                <ToolCard
                    title="Pack Expositor"
                    description="Ayuda a tus clientes a visualizar nuestros productos en su tienda. Ofrece el pack de expositor de muestras junto con dos platos de ducha a un precio especial."
                    details="Coste neto: 300€. Incluye expositor de platos + 2 platos de 160x70cm (acabado a elegir). ¡Una herramienta de venta clave para aumentar la visibilidad del producto en tienda!"
                     icon={
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                       </svg>
                    }
                />

                {/* Card 3: Shower System Offer */}
                <ToolCard
                    title="Promo Conjunto Monomando ó Termostático + Plato"
                    description="Ofrece a tus clientes una solución de ducha completa y de diseño a un precio inmejorable. Esta promoción combina nuestros platos de ducha más vendidos (Classic, Flat o Softum) con un sistema de grifería de alta calidad."
                    details="Argumento de venta: ¡Pack con precio sensacional! Informa a tu cliente que puede combinar un plato CLASSIC, FLAT o SOFTUM con una grifería monomando o termostática a un precio cerrado imbatible."
                     icon={
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                    }
                />
            </div>
        </div>
    );
};

export default CommercialConditionsPage;