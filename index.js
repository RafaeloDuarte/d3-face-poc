import { select, arc } from 'd3'

const svg = select('svg')

const height = +svg.attr('height')
const width = +svg.attr('width')
const eyeSpacing = 100
const eyeHeight = -70
const eyeRadius = 30
const eyesbrowWidth = 70
const eyesbrowHeight = 15
const eyesbrowYOffset = -70

const g = svg.append('g')
	.attr('transform',`translate(${width / 2},${height / 2})`)

const circle = g.append('circle')
	.attr('r',height/2)
	.attr('fill', 'yellow')
	.attr('stroke', 'black')

const eyeG = g.append('g')
	.attr('transform',`translate(0,${eyeHeight})`)
	
const leftEye = eyeG.append('circle')
	.attr('r', eyeRadius)
	.attr('cx', -eyeSpacing)

const rightEye = eyeG.append('circle')
	.attr('r', eyeRadius)
	.attr('cx', eyeSpacing)

const eyebrowG = eyeG
	.append('g')
		.attr('transform', `translate(0,${eyesbrowYOffset})`);

eyebrowG.transition().duration(2000)
		.attr('transform', `translate(0,${eyesbrowYOffset - 50})`)
		.transition().duration(2000)
		.attr('transform', `translate(0,${eyesbrowYOffset})`)

const leftEyebrow = eyebrowG.append('rect')
	.attr('x', eyeSpacing - eyesbrowWidth / 2)
	.attr('width', eyesbrowWidth)
	.attr('height',eyesbrowHeight)

const rightEyebrow = eyebrowG.append('rect')
	.attr('x', - eyeSpacing - eyesbrowWidth / 2)
	.attr('width', eyesbrowWidth)
	.attr('height',eyesbrowHeight)

const smile = g.append('path')
  .attr('d', arc()({
    startAngle: Math.PI / 2,
  	endAngle: Math.PI * 3/2,
  	innerRadius:150,
  	outerRadius: 180
  }))