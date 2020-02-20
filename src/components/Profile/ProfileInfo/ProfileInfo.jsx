import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div>
				<img src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
			</div>
			<div className={classes.descriptionBlock}>
				ava + description
			</div>
		</div>
	);
}

export default ProfileInfo;