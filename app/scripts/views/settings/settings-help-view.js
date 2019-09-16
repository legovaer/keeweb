import { View } from 'view-engine/view';
import { RuntimeInfo } from 'comp/app/runtime-info';
import { Links } from 'const/links';
import template from 'templates/settings/settings-help.hbs';

class SettingsHelpView extends View {
    template = template;

    render() {
        const appInfo =
            'KeeWeb v' +
            RuntimeInfo.version +
            ' (' +
            RuntimeInfo.commit +
            ', ' +
            RuntimeInfo.buildDate +
            ')\n' +
            'Environment: ' +
            (RuntimeInfo.launcher ? RuntimeInfo.launcher : 'web') +
            '\n' +
            'User-Agent: ' +
            RuntimeInfo.userAgent;

        super.render({
            issueLink:
                Links.Repo +
                '/issues/new?body=' +
                encodeURIComponent('!please describe your issue here!\n\n' + appInfo),
            desktopLink: Links.Desktop,
            webAppLink: Links.WebApp,
            appInfo: _.escape(appInfo)
        });
    }
}

export { SettingsHelpView };
