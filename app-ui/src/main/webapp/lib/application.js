var $ = window.jQuery;
var applicationManager = {
	$cascade: null,

	/**
	 * Debug mode. When true, traceDebug is enabled
	 */
	debug: typeof DEBUG_ENABLED !== 'undefined' && DEBUG_ENABLED,

	/**
	 * Initialize AMD dependencies and configuration.
	 */
	initialize: function () {
		var cache = !this.debug && location.hostname !== 'localhost' && requirejs.s.contexts._.config.urlArgs('', '').substring(1) !== 'bust=${project.version}';
		var urlArgs = cache ? null : 'bust=' + new Date().getTime();
		require.config({
			urlArgs: cache ? requirejs.s.contexts._.config.urlArgs : function (id, url) {
				return (url.indexOf('?') === -1 ? '?' : '&') + urlArgs;
			},
			waitSeconds: 20,
			packages: [
				{
					name: 'moment',
					location: 'momentjs',
					main: 'moment'
				}
			],
			paths: {
				'main': '../main',
				'root': '.',
				'plugins': 'cascade/plugins',

				'bootstrap': 'bootstrap/bootstrap',
				'bootstrap.mod': 'bootstrap/bootstrap.mod',
				'bootstrap-datepicker.core': 'datepicker/bootstrap-datepicker',
				'bootstrap-datepicker.mod': 'datepicker/bootstrap-datepicker.mod',
				'bootstrap-daterangepicker.core': 'daterangepicker/bootstrap-daterangepicker',
				'bootstrap-daterangepicker.mod': 'daterangepicker/bootstrap-daterangepicker.mod',
				'bootstrap-jasny': 'jasny/fileinput',
				'bootstrap-notify': 'bootstrap-notify/bootstrap-notify',
				'bootstrap-notify.mod': 'bootstrap-notify/bootstrap-notify.mod',
				'bootstrap-spinner': 'spinner/fuelux-spinner',
				'bootstrap-switch': 'switch/bootstrap-switch',
				'bootstrap-timepicker': 'timepicker/bootstrap-timepicker',
				'bootstrap-timepicker.mod': 'timepicker/bootstrap-timepicker.mod',
				'bootbox.mod': 'bootbox/bootbox.mod',
				'cascade': 'cascade/cascade',
				'datatables.mod': 'datatables/datatables.mod',
				'datatables.net': 'datatables/jquery.dataTables',
				'datatables.net-bs': 'datatables/dataTables.bootstrap',
				'datatables.net-buttons': 'datatables/dataTables.buttons',
				'datatables.net-buttons-bs': 'datatables/buttons.bootstrap',
				'datatables.net-edit': 'datatables/datatables.edit',
				'datatables.net-filters': 'datatables/datatables.filters',
				'datepicker.core': 'datepicker/bootstrap-datepicker',
				'error.mod': 'error/error.mod',
				'form': 'jquery.form',
				'format.mod': 'format/format.mod',
				'formatter': 'formatter/jquery.formatter',
				'globals.mod': 'globals.mod',
				'handlebars.mod': 'handlebars/handlebars.mod',
				'highcharts': 'highcharts/highcharts',
				'jquery-ui': 'jquery-ui/jquery-ui.custom',
				'l10n.mod': 'l10n/l10n.mod',
				'masonry': 'masonry/masonry.pkgd',
				'material': 'material-design/material',
				'material.mod': 'material-design/material.mod',
				'moment.mod': 'momentjs/moment.mod',
				'prettify': 'prettify/prettify',
				'qunit.mod': 'qunit/qunit.mod',
				'ripples': 'ripples/ripples',
				'scroll.mod': 'scroll/scroll.mod',
				'security.mod': 'security/security.mod',
				'select2': 'select2/select2',
				'sparkline': 'sparkline/jquery.sparkline',
				'toastr': 'toastr/toastr',
				'toastr.mod': 'toastr/toastr.mod',
				'validation.mod': 'validation/validation.mod',
				'zone-public': 'loader/zone-public',
				'zone-private': 'loader/zone-private',
				'zone-protected': 'loader/zone-protected'
			},
			shim: {
				'bootbox.core': ['bootstrap'],
				'bootstrap': ['jquery'],
				'bootstrap-datepicker.core': ['bootstrap'],
				'bootstrap-material-datetimepicker.core': ['bootstrap', 'moment.mod'],
				'bootstrap-daterangepicker.core': ['bootstrap'],
				'bootstrap-jasny': ['bootstrap'],
				'bootstrap-notify': ['bootstrap'],
				'bootstrap-switch': ['jquery'],
				'bootstrap-timepicker': ['bootstrap'],
				'jquery-ui': ['jquery'],
				'masonry': ['jquery'],
				'material': ['jquery'],
				'ripples': ['jquery']
			},
			config: {
				moment: {
					noGlobal: true
				}
			}
		});
		require([
			'jquery',
			'cascade',
			'text',
			'i18n',
			'css',
			'ready',
			'globals.mod'
		], function ($, $cascade) {
			window.jQuery = $;
			window.$ = $;
			jQuery = $;
			applicationManager.$cascade = $cascade;
			$cascade.initialize();
		});
	}
};
applicationManager.initialize();
