import React from 'react';
import { teamdata } from '../../websitedata';
import TeamCard from './TeamCard';

function TeamSection() {
	const teamcard = teamdata.membersdata.map((item) => (
		<TeamCard key={item.name} name={item.name} pic={item.pic} pos={item.pos} />
	));

	return (
		<section id={`${teamdata.id}`} className='team-section'>
			<div className='team-section-title'>{teamdata.teamTile}</div>
			<div className='team-section-des'>{teamdata.teamdesline}</div>
			<div className='team-container'>{teamcard}</div>
		</section>
	);
}

export default TeamSection;
