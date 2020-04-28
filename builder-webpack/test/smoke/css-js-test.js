const glob = require('glob-all');

describe('Checking generated js css files', () => {
    it('should genetate js css files', (done) => {
        const files = glob.sync([
            './dist/index_*.js',
            './dist/index_*.css',
            './dist/search_*.js',
            './dist/search_*.css'
        ]);
        console.log(files)
        if(files.length) {
            done();
        } else {
            throw new Error('no js css files generated');
        }
    })
})