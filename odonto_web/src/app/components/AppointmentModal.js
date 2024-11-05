import { useState } from 'react';

export default function AppointmentModal({ isOpen, onClose }) {
    const [appointmentData, setAppointmentData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el envío de la cita pendiente de confirmación
        console.log("Cita pendiente de confirmación:", appointmentData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">Agendar Cita</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800"
                                required
                                placeholder="Tu nombre completo"
                                onChange={(e) => setAppointmentData({ ...appointmentData, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800"
                                required
                                placeholder="tucorreo@ejemplo.com"
                                onChange={(e) => setAppointmentData({ ...appointmentData, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Fecha
                            </label>
                            <input
                                type="date"
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800"
                                required
                                onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Hora
                            </label>
                            <input
                                type="time"
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800"
                                required
                                onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Notas adicionales
                            </label>
                            <textarea
                                className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 outline-none text-gray-800 resize-none"
                                rows="3"
                                placeholder="Detalles adicionales (opcional)"
                                onChange={(e) => setAppointmentData({ ...appointmentData, notes: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium shadow-sm hover:shadow-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                        >
                            Solicitar Cita
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
