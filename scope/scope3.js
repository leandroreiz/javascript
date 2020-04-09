const video = {
    title: 'title',
    tags: ['tag a', 'tag b', 'tag c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
        // we need to define the keyword 'this' as a parameter for the 'forEach' method to have access to the video object. This occurs because the function declared inside the 'forEach' is a simple function and not a method, so the 'this keyword' will point to the global scope.
    }
};

video.showTags();