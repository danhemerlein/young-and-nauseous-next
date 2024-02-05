/*
  the code below is a modified version of the original code from the following source:
  https://www.superhi.com/courses/shaders-for-the-web
*/

const includes = `
	float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
	}
`

const frag = `

#ifdef GL_ES
precision highp float;
#endif

#define MAX 3

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform float scroll;

uniform vec4 innerColors[MAX];
uniform vec4 midColors[MAX];
uniform vec4 outerColors[MAX];

varying vec2 v_texcoord;

	${includes}

	vec4 sampleColor(vec4 colors[MAX], int index) {
    for (int i = 0; i < MAX; i++) {
        if (index == i) {
            return colors[i];
        }
    }

    return vec4(1.0, 1.0, 1.0, 1.0);
}

void main(void)
{
    vec2 uv = -1.0 + 2.0 * v_texcoord;

    vec4 background = vec4(1.0, 0.902, 0.847, 1.0);



    int lowerIndex  = int(floor(scroll));
    int upperIndex  = int(ceil(scroll));
    float mixer     = fract(scroll);
    mixer           = smoothstep(0.3, 0.7, mixer);

    vec4 innerColor = mix(
        sampleColor(innerColors, lowerIndex),
        sampleColor(innerColors, upperIndex),
        mixer
    );

    vec4 midColor   = mix(
        sampleColor(midColors, lowerIndex),
        sampleColor(midColors, upperIndex),
        mixer
    );

    vec4 outerColor = mix(
        sampleColor(outerColors, lowerIndex),
        sampleColor(outerColors, upperIndex),
        mixer
    );


    vec2 innerPoint = vec2(0.0, 0.0) + 0.25 * vec2(cos(u_time), sin(u_time));
    vec2 midPoint   = innerPoint + 0.5 * vec2(cos(u_time), sin(u_time));
    vec2 outerPoint = vec2(0.0, 0.0);

    float innerDist = distance(uv, innerPoint);
    float midDist   = distance(uv, midPoint);
    float outerDist = distance(uv, outerPoint);

    float grain     = mix(-0.15, 0.15, rand(uv));

    float innerStep = smoothstep(0.0, 1.0, innerDist + grain);
    float midStep   = smoothstep(0.0, 1.5, midDist + grain);
    float outerStep = step(1.0, outerDist);

    vec4 color      = mix(innerColor, midColor, innerStep);
    color           = mix(color, outerColor, midStep);
    color           = mix(color, background, outerStep);

    float disc      = fract(outerDist * 30.0);
    float mixDisc   = smoothstep(0.2, 0.3, disc) - smoothstep(0.7, 0.8, disc);

    color           = mix(background, color, mixDisc);

    gl_FragColor = color;
}
`

const canvas = document.getElementById('RecordCanvas')
if (canvas) {
  const sandbox = new GlslCanvas(canvas)

  const sizer = () => {
    const s = window.innerWidth * 0.4
    const dpi = window.devicePixelRatio

    canvas.width = s * dpi
    canvas.height = s * dpi
    canvas.style.width = s + 'px'
    canvas.style.height = s + 'px'
  }

  sizer()

  window.addEventListener('resize', () => {
    sizer()
  })

  sandbox.load(frag)
  sandbox.setUniform('scroll', 0)
  sandbox.setUniform(
    'innerColors',
    [0.4824, 0.1333, 0.7608, 1.0],
    [0.1333, 0.7608, 0.4824, 1.0],
    [0.4824, 0.7882, 0.5647, 1.0],
  )

  sandbox.setUniform(
    'midColors',
    [0.2314, 0.7608, 0.9333, 1.0],
    [0.4824, 0.1333, 0.7608, 1.0],
    [0.6745, 0.4824, 0.7882, 1.0],
  )

  sandbox.setUniform(
    'outerColors',
    [0.7255, 0.6824, 0.6039, 1.0],
    [0.7608, 0.4824, 0.1333, 1.0],
    [0.7882, 0.6745, 0.4824, 1.0],
  )

  window.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    const wh = window.innerHeight

    sandbox.setUniform('scroll', pixels / wh)
  })
}
