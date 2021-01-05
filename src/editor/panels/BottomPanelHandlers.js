/* globals $ */
import SvgCanvas from '../../svgcanvas/svgcanvas.js';

const {$id} = SvgCanvas;

/*
 * register actions for left panel
 */
/**
 *
 */
class BottomPanelHandlers {
  /**
   * @param {PlainObject} editor svgedit handler
  */
  constructor (editor) {
    this.editor = editor;
    this.svgCanvas = editor.svgCanvas;
  }
  /**
   * @type {module}
   */
  get selectedElement () {
    return this.editor.selectedElement;
  }
  /**
   * @type {module}
   */
  get multiselected () {
    return this.editor.multiselected;
  }

  /**
  * @type {module}
  */
  changeStrokeWidth (e) {
    let val = e.target.value;
    if (val === 0 && this.selectedElement && ['line', 'polyline'].includes(this.selectedElement.nodeName)) {
      val = 1;
    }
    this.svgCanvas.setStrokeWidth(val);
  }

  /**
  * @type {module}
  */
  changeZoom (value) {
    switch (value) {
    case 'canvas':
    case 'selection':
    case 'layer':
    case 'content':
      this.editor.zoomChanged(window, value);
      break;
    default:
    {
      const zoomlevel = Number(value) / 100;
      if (zoomlevel < 0.001) {
        value = 0.1;
        return;
      }
      const zoom = this.svgCanvas.getZoom();
      const wArea = this.editor.workarea;

      this.editor.zoomChanged(window, {
        width: 0,
        height: 0,
        // center pt of scroll position
        x: (wArea[0].scrollLeft + wArea.width() / 2) / zoom,
        y: (wArea[0].scrollTop + wArea.height() / 2) / zoom,
        zoom: zoomlevel
      }, true);
    }
    }
  }
  /**
   * @fires module:svgcanvas.SvgCanvas#event:ext_toolButtonStateUpdate
   * @returns {void}
   */
  updateToolButtonState () {
    const bNoFill = (this.svgCanvas.getColor('fill') === 'none');
    const bNoStroke = (this.svgCanvas.getColor('stroke') === 'none');
    const buttonsNeedingStroke = ['tool_fhpath', 'tool_line'];
    const buttonsNeedingFillAndStroke = [
      'tools_rect', 'tools_ellipse',
      'tool_text', 'tool_path'
    ];

    if (bNoStroke) {
      buttonsNeedingStroke.forEach((btn) => {
        // if btn is pressed, change to select button
        if ($id(btn).pressed) {
          this.editor.leftPanelHandlers.clickSelect();
        }
        $(btn).disabled = true;
      });
    } else {
      buttonsNeedingStroke.forEach((btn) => {
        $id(btn).disabled = false;
      });
    }

    if (bNoStroke && bNoFill) {
      buttonsNeedingFillAndStroke.forEach((btn) => {
        // if btn is pressed, change to select button
        if ($id(btn).pressed) {
          this.editor.leftPanelHandlers.clickSelect();
        }
        $(btn).disabled = true;
      });
    } else {
      buttonsNeedingFillAndStroke.forEach((btn) => {
        $id(btn).disabled = false;
      });
    }

    this.svgCanvas.runExtensions(
      'toolButtonStateUpdate',
      /** @type {module:svgcanvas.SvgCanvas#event:ext_toolButtonStateUpdate} */ {
        nofill: bNoFill,
        nostroke: bNoStroke
      }
    );
  }
  /**
  * @type {module}
  */
  updateColorpickers (apply) {
    $id('fill_color').update(this.svgCanvas, this.selectedElement, apply);
    $id('stroke_color').update(this.svgCanvas, this.selectedElement, apply);
  }

  /**
  * @type {module}
  */
  handleColorPicker (type, evt) {
    const {paint} = evt.detail;
    this.svgCanvas.setPaint(type, paint);
    this.updateToolButtonState();
  }
  /**
  * @type {module}
  */
  handleStrokeAttr (type, evt) {
    this.svgCanvas.setStrokeAttr(type, evt.detail.value);
  }
  /**
  * @type {module}
  */
  handleOpacity (evt) {
    // if ($(this).find('div').length) { return; }
    const val = Number.parseInt(evt.currentTarget.value.split('%')[0]);
    this.svgCanvas.setOpacity(val / 100);
  }
  /**
  * @type {module}
  */
  handlePalette (e) {
    e.preventDefault();
    // shift key or right click for stroke
    const {picker, color} = e.detail;
    // Webkit-based browsers returned 'initial' here for no stroke
    const paint = color === 'none' ? new $.jGraduate.Paint() : new $.jGraduate.Paint({alpha: 100, solidColor: color.substr(1)});
    if (picker === 'fill') {
      $id('fill_color').setPaint(paint);
    } else {
      $id('stroke_color').setPaint(paint);
    }
    this.svgCanvas.setColor(picker, color);
    if (color !== 'none' && this.svgCanvas.getPaintOpacity(picker) !== 1) {
      this.svgCanvas.setPaintOpacity(picker, 1.0);
    }
    this.updateToolButtonState();
  }

  /**
   * @type {module}
   */
  init () {
    // register actions for bottom panel
    $id('zoom').addEventListener('change', (e) => this.changeZoom.bind(this)(e.detail.value));
    $id('stroke_color').addEventListener('change', (evt) => this.handleColorPicker.bind(this)('stroke', evt));
    $id('fill_color').addEventListener('change', (evt) => this.handleColorPicker.bind(this)('fill', evt));
    $id('stroke_width').addEventListener('change', this.changeStrokeWidth.bind(this));
    $id('stroke_style').addEventListener('change', (evt) => this.handleStrokeAttr.bind(this)('stroke-dasharray', evt));
    $id('stroke_linejoin').addEventListener('change', (evt) => this.handleStrokeAttr.bind(this)('stroke-linejoin', evt));
    $id('stroke_linecap').addEventListener('change', (evt) => this.handleStrokeAttr.bind(this)('stroke-linecap', evt));
    $id('opacity').addEventListener('change', this.handleOpacity.bind(this));
    $id('palette').addEventListener('change', this.handlePalette.bind(this));
    const {curConfig} = this.editor.configObj;
    $id('fill_color').setPaint(new $.jGraduate.Paint({alpha: 100, solidColor: curConfig.initFill.color}));
    $id('stroke_color').setPaint(new $.jGraduate.Paint({alpha: 100, solidColor: curConfig.initStroke.color}));
  }
}

export default BottomPanelHandlers;
