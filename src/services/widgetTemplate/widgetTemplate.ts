import * as fs from 'fs';

import { FileLoaderResponse, WidgetFileType } from '../../server/controllers/widgetController';

const enum WidgetTemplateEventMessage {
    INVALID_DATA = 'Unable to load contents of widget.html.',
}

export const widgetTemplateLoader = (widgetDir: string): Promise<FileLoaderResponse> => new Promise((resolve, reject) => {
    fs.readFile(`${widgetDir}/${WidgetFileType.WIDGET_TEMPLATE_HTML}`, 'utf8', (err: Error, data: string) => {
        if (!data || err) {
            reject(WidgetTemplateEventMessage.INVALID_DATA);
        }

        resolve({ type: WidgetFileType.WIDGET_TEMPLATE_HTML, data });
    });
});
