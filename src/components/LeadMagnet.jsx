import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

const LeadMagnet = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setEmail('');
            setName('');
        }, 1000);
    };

    return (
        <section className="py-24 bg-coffee text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto relative z-10">
                <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-16 backdrop-blur-sm">
                    <div className="text-center mb-12">
                        <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">
                            Exclusive Updates
                        </span>
                        <h2 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                            Join the Priority List
                        </h2>
                        <p className="text-white/70 max-w-lg mx-auto leading-relaxed">
                            Get behind-the-scenes construction footage, investment reports, and be the first to know when new unit batches are released.
                        </p>
                    </div>

                    {isSubmitted ? (
                        <div className="bg-green-500/10 border border-green-500/20 p-8 text-center rounded-none animate-in fade-in zoom-in duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-white mb-2">You're on the list!</h3>
                            <p className="text-white/60">Watch your inbox for exclusive updates.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="mt-6 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors"
                            >
                                Register another email
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                            <div>
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Full Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/30 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-gold transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn bg-gold text-white hover:bg-white hover:text-coffee group mt-4 relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Join Waiting List <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <p className="text-center text-xs text-white/30 pt-4">
                                We value your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
