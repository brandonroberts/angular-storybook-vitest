import { type AngularRenderer, setProjectAnnotations } from '@storybook/angular';
import { RenderContext } from 'storybook/internal/types';
import { beforeAll } from 'vitest';
// @ts-ignore
import * as configAnnotations from '@storybook/angular/client/config';

import * as previewAnnotations from './preview';

const render = configAnnotations.render;

async function renderToCanvas(context: RenderContext<AngularRenderer>, element: HTMLElement) {
	element.id = context.id;
	await configAnnotations.renderToCanvas(context, element);
}

const renderAnnotations = {
	render,
	renderToCanvas
};

const annotations = setProjectAnnotations([previewAnnotations, renderAnnotations]);

beforeAll(annotations.beforeAll);
