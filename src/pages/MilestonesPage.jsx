import React, { useEffect } from 'react';
import { Check, Video, Image as ImageIcon, FileText, ArrowLeft, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadMagnet from '../components/LeadMagnet';

// Expanded milestones data with more detail and media triggers
const detailedMilestones = [
    {
        id: 1,
        title: "Land Acquisition & Title Perfection",
        status: "completed",
        date: "Q1 2024",
        description: "Official acquisition of Plot 804 in Wuye Distinct. All statutory payments made to AGIS and C of O recertification process initiated.",
        media: { type: 'doc', label: 'View C of O Copy' }
    },
    {
        id: 2,
        title: "Enugu State Govt JV Signed",
        status: "completed",
        date: "Q2 2024",
        description: "Strategic Joint Venture partnership sealed with the Enugu State Government, guaranteeing project backing and acceleration. A historic milestone for public-private partnership.",
        media: { type: 'image', label: 'View Signing Photos' }
    },
    {
        id: 3,
        title: "Site Choosing & Soil Tests",
        status: "completed",
        date: "Q3 2024",
        description: "Comprehensive geological surveys including soil bearing capacity tests (SPT & CPT) completed to ensure structural integrity for the 4-floor structures.",
        media: { type: 'video', label: 'Watch Site Survey' }
    },
    {
        id: 4,
        title: "Breaking Ground & Foundation",
        status: "active",
        date: "NOW",
        description: "Mobilization of heavy equipment. Excavation for foundations is currently 75% complete. Steel reinforcement cages are being assembled on-site.",
        media: { type: 'video', label: 'Live Site Cam' }
    },
    {
        id: 5,
        title: "First Floor Slab Casting",
        status: "pending",
        date: "Q2 2025",
        description: "Projected casting of the suspended floor slab for Block A and B. This marks the beginning of the vertical rise of The Woodlands.",
        media: null
    },
    {
        id: 6,
        title: "Roofing & Top Out",
        status: "pending",
        date: "Q4 2026",
        description: "Completion of all structural frames and roofing. The distinct architectural silhouette of The Woodlands will be fully visible.",
        media: null
    },
    {
        id: 7,
        title: "Internal Finishing & Smart Home Install",
        status: "pending",
        date: "Q2 2027",
        description: "Installation of thermal glass, smart home automation systems, and luxury sanitary fittings. The 'Quiet Luxury' interior theme comes to life.",
        media: null
    },
    {
        id: 8,
        title: "Handover",
        status: "pending",
        date: "Jan 1, 2028",
        description: "Grand opening and official handover of keys to early investors. Property management team takes over facility operations.",
        media: null
    },
];

const MilestonesPage = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-sand min-h-screen pt-20">
            {/* Header */}
            <div className="bg-coffee text-white py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto relative z-10 text-center">
                    <Link to="/" className="inline-flex items-center text-gold hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-heading font-medium mb-4">Development Cycle</h1>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
                        Complete transparency from the ground up. Track the evolution of The Woodlands in real-time.
                    </p>
                </div>
            </div>

            {/* Timeline */}
            <div className="container mx-auto py-24">
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-24 top-0 bottom-0 w-px bg-coffee/10"></div>

                    <div className="space-y-20">
                        {detailedMilestones.map((step) => {
                            const isActive = step.status === 'active';
                            const isCompleted = step.status === 'completed';

                            return (
                                <div key={step.id} className="relative pl-24 md:pl-40 group">
                                    {/* Timeline Node */}
                                    <div className="absolute left-6 md:left-[92px] top-0 -translate-x-1/2 flex flex-col items-center gap-2">
                                        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-500 z-10
                                            ${isActive || isCompleted ? 'bg-coffee border-coffee' : 'bg-sand border-gray-300'}
                                            ${isActive ? 'scale-150 ring-4 ring-coffee/20' : ''}
                                        `}></div>
                                        {/* Date Label on Desktop (Left of line) */}
                                        <span className={`hidden md:block absolute right-12 top-0 text-xs font-bold tracking-widest uppercase w-32 text-right ${isActive ? 'text-gold' : 'text-gray-400'}`}>
                                            {step.date}
                                        </span>
                                    </div>

                                    {/* Mobile Date Label */}
                                    <span className={`md:hidden text-[10px] font-bold tracking-widest uppercase mb-2 block ${isActive ? 'text-gold' : 'text-gray-400'}`}>
                                        {step.date}
                                    </span>

                                    {/* Content Card */}
                                    <div className={`relative transition-all duration-500 ${isActive ? 'translate-x-2' : ''}`}>
                                        <h3 className={`text-2xl font-heading mb-3 ${isActive ? 'text-coffee' : 'text-gray-400'}`}>
                                            {step.title}
                                            {isActive && <span className="ml-3 inline-block px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold tracking-wide uppercase rounded-sm align-middle">In Progress</span>}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed max-w-xl mb-6">
                                            {step.description}
                                        </p>

                                        {/* Media Buttons */}
                                        {step.media && (
                                            <button className="inline-flex items-center gap-3 px-5 py-3 bg-white border border-coffee/10 hover:border-gold hover:shadow-lg transition-all group/btn">
                                                <div className="w-8 h-8 bg-coffee/5 rounded-full flex items-center justify-center text-coffee group-hover/btn:bg-gold group-hover/btn:text-white transition-colors">
                                                    {step.media.type === 'video' ? <PlayCircle size={16} /> :
                                                        step.media.type === 'doc' ? <FileText size={16} /> : <ImageIcon size={16} />}
                                                </div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-coffee/80 group-hover/btn:text-coffee">
                                                    {step.media.label}
                                                </span>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Lead Magnet CTA */}
            <LeadMagnet />
        </div>
    );
};

export default MilestonesPage;
