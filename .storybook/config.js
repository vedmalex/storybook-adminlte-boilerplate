import { configure } from '@kadira/storybook';

function loadStories() {
  require('../client/modules/ui/sidebar/stories');
  require('../client/modules/ui/navbar/stories');
  require('../client/modules/ui/forms/stories');
}

configure(loadStories, module);
