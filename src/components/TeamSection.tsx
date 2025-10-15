import React from 'react';

// Import team images
import davidKimImg from '../assets/images/team/david-kim.jpg';
import nathanLiuImg from '../assets/images/team/nathan-liu.jpg';

type TeamMember = {
  name: string;
  title?: string;
  bio?: string;
  linkedinUrl?: string;
  email?: string;
  phone?: string;
  avatarUrl?: string;
  imageUrl?: string;
};

const team: TeamMember[] = [
  {
    name: 'David Kim',
    linkedinUrl: 'https://www.linkedin.com/in/david-kim-79990b23b/',
    email: 'poket7878@gmail.com',
    phone: '858 371 8884',
    bio: 'UC Berkeley — Chemical Engineering and EECS. Focused on thermodynamic systems and scalable control software.',
    imageUrl: davidKimImg
  },
  {
    name: 'Nathan Liu',
    linkedinUrl: 'https://www.linkedin.com/in/nathan-sr-liu/',
    email: 'liu.nathan05@gmail.com',
    phone: '518 334 5674',
    bio: 'UC Berkeley — Chemical Engineering and Computer Science. Works on PINNs, optimization, and plant data integration.',
    imageUrl: nathanLiuImg
  },
];

export function TeamSection() {
  return (
    <section className="relative py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="inline-block mb-4 px-3 py-1 border border-red-600 bg-red-600/5">
            <span className="text-xs tracking-wider text-red-600">MEET THE TEAM</span>
          </div>
          <h2 className="text-5xl mb-4 text-black" style={{ fontWeight: 400 }}>
            Our Leadership
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl">
            Multi-disciplinary team spanning thermodynamics, materials engineering, and applied machine learning.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="border border-gray-300 bg-white p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600" style={{ fontWeight: 600 }}>
                  {member.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
                <div>
                  <div className="text-xl text-black" style={{ fontWeight: 600 }}>{member.name}</div>
                  {member.title && (
                    <div className="text-sm text-gray-500">{member.title}</div>
                  )}
                </div>
              </div>
              {member.bio && (
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
              )}
              
              {/* Team member photo */}
              <div className="mb-6 flex justify-center">
                {member.imageUrl ? (
                  <img
                    src={member.imageUrl}
                    alt={`${member.name} - Team Member`}
                    className="w-24 h-24 object-cover border-2 border-gray-300 rounded"
                  />
                ) : null}
              </div>

              {(member.linkedinUrl || member.email || member.phone) && (
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2 text-sm">
                  {member.linkedinUrl && (
                    <div>
                      <a href={member.linkedinUrl} target="_blank" rel="noreferrer" className="text-red-600 hover:underline">
                        LinkedIn
                      </a>
                    </div>
                  )}
                  {member.email && (
                    <div>
                      <a href={`mailto:${member.email}`} className="text-gray-700 hover:underline">
                        {member.email}
                      </a>
                    </div>
                  )}
                  {member.phone && (
                    <div>
                      <a href={`tel:${member.phone.replace(/[^\d+]/g, '')}`} className="text-gray-700 hover:underline">
                        {member.phone}
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


