(()=>{const{__}=wp.i18n,{addFilter:e}=wp.hooks,{Fragment:t}=wp.element,{InspectorControls:l}=wp.blockEditor,{createHigherOrderComponent:a,withState:o}=wp.compose,{ToggleControl:n,SelectControl:u,PanelBody:i,PanelRow:r}=wp.components,b=a((e=>a=>{if("core/"!==a.name.substring(0,5))return React.createElement(t,null,React.createElement(e,a));const{attributes:o,setAttributes:b,isSelected:s}=a,{gutenbergUseAOS:g,gutenbergAOSAnimation:d}=o;return React.createElement(t,null,React.createElement(e,a),s&&React.createElement(l,null,React.createElement(i,{title:__("AOS Settings","gutenberg-aos")},React.createElement(r,null,React.createElement(n,{label:__("Animate on scroll","gutenberg-aos"),checked:!!g,onChange:()=>b({gutenbergUseAOS:!g}),help:__(g?"Animate Element when it's inside the users viewport":"Don't animate Element when it's inside the users viewport","gutenberg-aos")})),React.createElement(r,null,React.createElement(u,{label:"Animation",value:d,options:[{label:"Fade",value:"fade"},{label:"Fade Up",value:"fade-up"},{label:"Fade Down",value:"fade-down"},{label:"Fade Right",value:"fade-right"},{label:"Fade Left",value:"fade-left"},{label:"Fade Up Right",value:"fade-up-right"},{label:"Fade Up Left",value:"fade-up-left"},{label:"Fade Down Left",value:"fade-down-left"},{label:"Fade Down Right",value:"fade-down-right"},{label:"Flip Left",value:"flip-left"},{label:"Flip Right",value:"flip-right"},{label:"Flip Up",value:"flip-up"},{label:"Flip Down",value:"flip-down"},{label:"Slide Up",value:"slide-up"},{label:"Slide Down",value:"slide-down"},{label:"Slide Left",value:"slide-left"},{label:"Slide Right",value:"slide-right"},{label:"Zoom In",value:"zoom-in"},{label:"Zoom In Up",value:"zoom-in-up"},{label:"Zoom In Down",value:"zoom-in-down"},{label:"Zoom In Left",value:"zoom-in-left"},{label:"Zoom In Right",value:"zoom-in-right"},{label:"Zoom Out",value:"zoom-out"},{label:"Zoom Out Up",value:"zoom-out-up"},{label:"Zoom Out Down",value:"zoom-out-down"},{label:"Zoom Out Right",value:"zoom-out-right"},{label:"Zoom Out Left",value:"zoom-out-left"},{label:"Count Up From Zero",value:"count-up"}],onChange:e=>a.setAttributes({gutenbergAOSAnimation:e})})))))}),"gutenbergAOSControls");e("blocks.registerBlockType","gutenbergaos/attributes",(function(e){return void 0!==e.attributes&&(e.attributes=Object.assign(e.attributes,{gutenbergUseAOS:{type:"boolean",default:!1},gutenbergAOSAnimation:{type:"select",default:"fade-up"}})),e})),e("editor.BlockEdit","gutenbergaos/controls",b),e("blocks.getSaveContent.extraProps","gutenbergaos/applyAttributes",(function(e,t,l){if("core/"!==t.name.substring(0,5))return e;const{gutenbergUseAOS:a,gutenbergAOSAnimation:o}=l;if(void 0!==a&&a){let t;t=void 0!==o&&o?o:"fade-up",e["data-aos"]=t,"count-up"===t&&(e["data-aos-id"]=t)}return e}))})();