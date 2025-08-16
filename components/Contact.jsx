export default function Contact() {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 py-16">
            <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-10 text-center">
                <h2 className="text-4xl font-extrabold mb-6 text-purple-700">Contact Me</h2>
                <p className="text-lg mb-4 text-gray-700">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <p className="text-lg mb-8 text-gray-700">
                    You can reach me via email at{" "}
                    <a
                        href="mailto:your.email@example.com"
                        className="text-purple-600 underline hover:text-purple-800 transition"
                    >
                        vvsvaibhav07@gmail.com
                    </a>
                </p>
                <div className="flex justify-center gap-6">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-5 py-2 rounded-full shadow hover:bg-purple-700 transition">
                        LinkedIn
                    </a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-5 py-2 rounded-full shadow hover:bg-gray-900 transition">
                        GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}