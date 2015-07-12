'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
// var yosay = require('yosay');   -- don't think I need this

var GatewayGenerator = yeoman.generators.Base.exports({
  promptUser: function() {
    var done = this.async();

    console.log(this.yeoman);

    var prompts = [{
      name: 'appName',
      message: 'What is your app\'s name'
    },{
      type: 'confirm',
      name: 'addDemoSection',
      message: 'Would you like to generate a demo Section',
      default: true
    }];

    this.prompt(prompts, funcntion(props) {
      this.appName = props.appName;
      this.addDemoSection = props.addDemoSection;

      done();
    }.bind(this));
  },

  scaffoldFolders: function(){
    //todo: this certainly looks like it can be more efficient
    this.mkdir('files');
    this.mkdir('provision');
    this.mkdir('src');
    this.mkdir('src/images');
    this.mkdir('src/js');
    this.mkdir('src/js/mods');
    this.mkdir('src/js/vendor');
    this.mkdir('src/scss');
    this.mkdir('src/scss/base');
    this.mkdir('src/scss/components');
    this.mkdir('src/scss/layout');
    this.mkdir('src/scss/mods');
    this.mkdir('src/scss/sections');
  },

  copyMainFiles: function() {
    //todo: will need to at least template some of these files. would be more efficient to just copy full directories recurrsively, but apparently this is frowned upon
    this.copy('_base.scss', 'src/scss/base/_base.scss');
    this.copy('_buttons.scss', 'src/scss/components/_buttons.scss');
    this.copy('_footer.scss', 'src/scss/mods/_footer.scss');
    this.copy('_forms.scss', 'src/scss/components/_forms.scss');
    this.copy('_full-bleed.scss', 'src/scss/sections/_full-bleed.scss');
    this.copy('_grid.scss', 'src/scss/layout/_grid.scss');
    this.copy('_links.scss', 'src/scss/components/_links.scss');
    this.copy('_settings.scss', 'src/scss/_settings.scss');
    this.copy('_tables.scss', 'src/scss/components/_tables.scss');
    this.copy('_typography.scss', 'src/scss/base/_typography.scss');
    this.copy('bowerrc', '.bowerrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('bower.json', 'bower.json');
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.copy('index.html', 'src/index.html');
    this.copy('LICENSE', 'LICENSE');
    this.copy('macros.conf', 'files/macros.conf');
    this.copy('main.js', 'js/main.js');
    this.copy('modernizr.min.js', 'js/vendor/modernizr.min.js');
    this.copy('package.json', 'package.json');
    this.copy('README.md', 'README.md');
    this.copy('styles.scss', 'scss/styles.scss');
    this.copy('Vagrantfile', 'Vagrantfile');
    this.copy('vhost.conf', 'files/vhost.conf');
    this.copy('xdebug.ini', 'files/xdebug.ini');
  },

  runNpm: function () {
    var done = this.async();
    this.npmInstall('', function() {
      console.log('/nGateway is setup and ready to use, happy developing!');
      done();
    });
  }





});

module.exports = GatewayGenerator;





/*   -- created from base
module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stellar ' + chalk.red('Gateway') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someOption',
      message: 'Would you like to enable this option?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
*/