// app/blog/dental/page.tsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function BlogPostDental() {
    return (
        <>
        <Navbar />
            <div className="max-w-4xl mx-auto p-6">
                <div className="bg-white rounded-xl border shadow-sm mb-8"> {/* Card */}
                    <div className="p-6 flex flex-col space-y-1.5"> {/* Header */}
                        <h1 className="text-3xl font-bold text-gray-800">
                            ¿Por qué mis dientes tienen números? Guía completa de numeración dental
                        </h1>
                        <div className="text-sm text-gray-500 mt-2">
                            Publicado en Salud Dental | 5 min de lectura
                        </div>
                    </div>

                    <div className="p-6 pt-0"> {/* Content */}
                        <div className="prose max-w-none">
                            {/* Introducción */}
                            <div className="mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    ¿Te ha pasado que el dentista menciona números como &quot;48&quot; o &quot;38&quot; y te preguntas de dónde salen tantos dientes? No estás solo. Una paciente nos preguntó recientemente: <em>&quot;¿De dónde sacaron ustedes 48 dientes si yo tengo solo 32?&quot;</em> Hoy vamos a resolver este misterio de la numeración dental.
                                </p>
                            </div>

                            {/* Sección Principal */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    ¿Por qué se numeran los dientes?
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    La numeración dental es un sistema universal que permite a los dentistas identificar con precisión cada diente sin confusiones. Imagina que necesitas una extracción o una radiografía específica - el dentista necesita una forma clara y precisa de comunicar exactamente qué diente requiere atención.
                                </p>
                            </div>

                            {/* Sistemas de Numeración */}
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Principales sistemas de numeración dental
                                </h2>

                                {/* Sistema FDI */}
                                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                                        1. Sistema FDI (El más usado en España)
                                    </h3>
                                    <div className="space-y-2">
                                        <p className="text-gray-700">La boca se divide en 4 cuadrantes:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Superior derecha (1)</li>
                                            <li>Superior izquierda (2)</li>
                                            <li>Inferior izquierda (3)</li>
                                            <li>Inferior derecha (4)</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Tipos de Dientes */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Incisivos</h4>
                                        <p className="text-sm text-gray-600">11, 12, 21, 22, 31, 32, 41, 42</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Caninos</h4>
                                        <p className="text-sm text-gray-600">13, 23, 33, 43</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Premolares</h4>
                                        <p className="text-sm text-gray-600">14, 15, 24, 25, 34, 35, 44, 45</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Molares</h4>
                                        <p className="text-sm text-gray-600">16, 17, 18, 26, 27, 28, 36, 37, 38, 46, 47, 48</p>
                                    </div>
                                </div>
                            </div>

                            {/* Conclusión */}
                            <div className="mt-8 bg-green-50 p-6 rounded-lg">
                                <h2 className="text-xl font-semibold text-green-800 mb-3">
                                    Para recordar
                                </h2>
                                <p className="text-gray-700">
                                    En nuestra clínica utilizamos el sistema FDI, el más común en España. Esto nos permite entender fácilmente los diagnósticos y presupuestos de otros dentistas españoles, facilitando la continuidad en tu atención dental.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}