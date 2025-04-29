import Image from 'next/image'
import React from 'react'

interface Colors {
    red: { text: "text-red-600"; border: "border-red-200" };
    orange: { text: "text-orange-600"; border: "border-orange-200" };
    amber: { text: "text-amber-600"; border: "border-amber-200" };
    yellow: { text: "text-yellow-600"; border: "border-yellow-200" };
    lime: { text: "text-lime-600"; border: "border-lime-200" };
    green: { text: "text-green-600"; border: "border-green-200" };
    emerald: { text: "text-emerald-600"; border: "border-emerald-200" };
    teal: { text: "text-teal-600"; border: "border-teal-200" };
    cyan: { text: "text-cyan-600"; border: "border-cyan-200" };
    sky: { text: "text-sky-600"; border: "border-sky-200" };
    blue: { text: "text-blue-600"; border: "border-blue-200" };
    indigo: { text: "text-indigo-600"; border: "border-indigo-200" };
    violet: { text: "text-violet-600"; border: "border-violet-200" };
    purple: { text: "text-purple-600"; border: "border-purple-200" };
    fuchsia: { text: "text-fuchsia-600"; border: "border-fuchsia-200" };
    pink: { text: "text-pink-600"; border: "border-pink-200" };
    rose: { text: "text-rose-600"; border: "border-rose-200" };
    neutral: { text: "text-neutral-600"; border: "border-neutral-200" };
    stone: { text: "text-stone-600"; border: "border-stone-200" };
    gray: { text: "text-gray-600"; border: "border-gray-200" };
    slate: { text: "text-slate-600"; border: "border-slate-200" };
}

interface StaffCardProps {
    color: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'neutral' | 'stone' | 'gray' | 'slate'
    staffMember: {
        name: string
        position: string
        photo: string
    }
}

export default function StaffCard({ color, staffMember }: StaffCardProps) {

    const colors: Colors = {
        red: { text: "text-red-600", border: "border-red-200" },
        orange: { text: "text-orange-600", border: "border-orange-200" },
        amber: { text: "text-amber-600", border: "border-amber-200" },
        yellow: { text: "text-yellow-600", border: "border-yellow-200" },
        lime: { text: "text-lime-600", border: "border-lime-200" },
        green: { text: "text-green-600", border: "border-green-200" },
        emerald: { text: "text-emerald-600", border: "border-emerald-200" },
        teal: { text: "text-teal-600", border: "border-teal-200" },
        cyan: { text: "text-cyan-600", border: "border-cyan-200" },
        sky: { text: "text-sky-600", border: "border-sky-200" },
        blue: { text: "text-blue-600", border: "border-blue-200" },
        indigo: { text: "text-indigo-600", border: "border-indigo-200" },
        violet: { text: "text-violet-600", border: "border-violet-200" },
        purple: { text: "text-purple-600", border: "border-purple-200" },
        fuchsia: { text: "text-fuchsia-600", border: "border-fuchsia-200" },
        pink: { text: "text-pink-600", border: "border-pink-200" },
        rose: { text: "text-rose-600", border: "border-rose-200" },
        neutral: { text: "text-neutral-600", border: "border-neutral-200" },
        stone: { text: "text-stone-600", border: "border-stone-200" },
        gray: { text: "text-gray-600", border: "border-gray-200" },
        slate: { text: "text-slate-600", border: "border-slate-200" },
    }

    return (
        <div className="bg-white p-5 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
            <Image
                className={`w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 ${colors[color].border}`}
                src={staffMember.photo}
                alt={staffMember.name}
                width={300}
                height={300}
            />
            <h4 className="text-lg font-semibold text-gray-800">{staffMember.name}</h4>
            <p className={`text-sm ${colors[color].text} font-medium`}>{staffMember.position}</p>
        </div>
    )
}
