import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

	/*let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 25},
		{id: 2, message: 'It\'s my first post', likesCount: 15},
		{id: 2, message: 'It\'s my first post', likesCount: 15},
		{id: 2, message: 'It\'s my first post', likesCount: 15},
		{id: 2, message: 'It\'s my first post', likesCount: 15}
	];*/

	let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

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
				{ postsElements }
			</div>
		</div>
	);
}

export default MyPosts;