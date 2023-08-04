// eslint-disable-next-line import/no-unresolved, import/extensions
import MemoryStorage from './MemoryStorage';
// eslint-disable-next-line import/no-unresolved, import/extensions
import PostService from './postService';

const m = new MemoryStorage();
const postService = new PostService(m);

console.log('1: storage', postService.getPosts());

postService.createPosts('new post');
postService.createPosts('another post');

console.log('2: storage', postService.getPosts());
