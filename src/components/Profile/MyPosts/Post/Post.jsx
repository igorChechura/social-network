import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

	return (							
		<div className={classes.item}>
			<img src="https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt=""/>
			{props.message}
			<div>
				<span>like: {props.likeCount} </span>
			</div>
		</div>
	);
}

export default Post;