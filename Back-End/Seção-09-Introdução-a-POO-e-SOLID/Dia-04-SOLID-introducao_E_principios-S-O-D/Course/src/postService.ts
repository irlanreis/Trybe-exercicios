// eslint-disable-next-line import/no-unresolved, import/extensions
import MemoryStorage from './MemoryStorage';

class PostService {
  private db: MemoryStorage;
  // Injection of dependence é quando passamos a receber a dependência como parâmetro ao invés de instânciar a class.
  constructor(db = new MemoryStorage()) {
    this.db = db;
    // this.db = new MemoryStorage();
  }

  getPosts(): string[] {
    return this.db.read();
  }

  createPosts(title: string): void {
    this.db.insert(title);
  }
}

export default PostService;