// Punto de entrada para la funcionalidad del blog
import { initBlogCategories } from './blogCategories.js';
import { initSubscription } from './subscription.js';

export function initBlog() {
    initBlogCategories();
    initSubscription();
}