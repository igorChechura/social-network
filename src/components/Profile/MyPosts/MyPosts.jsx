import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	let postsData = [
		{id: 1, message: 'Hi, how are you?', likesCount: 25},
		{id: 2, message: 'It\'s my first post', likesCount: 15}
	];

	return (
		<div className={classes.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>					
				<Post message={postsData[0].messages} likesCount={postsData[0].likesCount} />
				<Post message={postsData[1].messages} likesCount={postsData[1].likesCount} />
			</div>
		</div>
	);
}

export default MyPosts;