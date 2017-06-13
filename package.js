// package metadata file for Meteor.js

Package.describe({
  name: 'materialize:materialize',  // http://atmospherejs.com/materialize/materialize
  summary: 'Materialize (official): A modern responsive front-end framework based on Material Design',
  version: '0.98.2',
  git: 'https://github.com/Dogfalo/materialize.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.imply('jquery');
  api.use([ 'jquery', 'fourseven:scss'], 'client');
  api.addFiles('dist/js/materialize.js', 'client');
  api.addFiles([
    'sass/components/date_picker/_default.date.scss',
    'sass/components/date_picker/_default.scss',
    'sass/components/date_picker/_default.time.scss',
    'sass/components/forms/_checkboxes.scss',
    'sass/components/forms/_file-input.scss',
    'sass/components/forms/_forms.scss',
    'sass/components/forms/_input-fields.scss',
    'sass/components/forms/_radio-buttons.scss',
    'sass/components/forms/_range.scss',
    'sass/components/forms/_select.scss',
    'sass/components/forms/_switches.scss',
    'sass/components/_badges.scss',
    'sass/components/_buttons.scss',
    'sass/components/_cards.scss',
    'sass/components/_carousel.scss',
    'sass/components/_chips.scss',
    'sass/components/_collapsible.scss',
    'sass/components/_color.scss',
    'sass/components/_dropdown.scss',
    'sass/components/_global.scss',
    'sass/components/_grid.scss',
    'sass/components/_icons-material-design.scss',
    'sass/components/_materialbox.scss',
    'sass/components/_mixins.scss',
    'sass/components/_modal.scss',
    'sass/components/_navbar.scss',
    'sass/components/_normalize.scss',
    'sass/components/_prefixer.scss',
    'sass/components/_preloader.scss',
    'sass/components/_pulse.scss',
    'sass/components/_roboto.scss',
    'sass/components/_sideNav.scss',
    'sass/components/_slider.scss',
    'sass/components/_table_of_contents.scss',
    'sass/components/_tabs.scss',
    'sass/components/_tapTarget.scss',
    'sass/components/_toast.scss',
    'sass/components/_tooltip.scss',
    'sass/components/_transitions.scss',
    'sass/components/_typography.scss',
    'sass/components/_variables.scss',
    'sass/components/_waves.scss',
    'sass/materialize.scss'
  ], 'client');

  api.export('Materialize', 'client');
});
