import { createTrickling } from 'trickling';
import 'trickling/lib/style.css';

// Create a Trickling progress instance
const tricklingProgress = createTrickling({
  color: '#d1005c80',
  removeFromDOMWhenDone: false,
});

// You can also change options after creating a Trickling progress instance
// tricklingProgress.setOptions({
//   // ...
// });

// Export the instance
export { tricklingProgress };
