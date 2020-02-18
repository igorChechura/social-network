import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
	return (
		<div className={classes.content}>
			<div>
				<img src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div className={classes.posts}>					
					<div className={classes.item}>
						post 1
					</div>
					<div className={classes.item}>
						post 2
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;