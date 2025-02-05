"use client"

import { useEffect, useRef } from "react"

class Star {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number

  constructor(canvas: HTMLCanvasElement) {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 1.5 + 0.5 // Slightly larger stars for better visibility
    this.speedX = Math.random() * 0.3 - 0.15
    this.speedY = Math.random() * 0.3 - 0.15
  }

  update(canvas: HTMLCanvasElement) {
    this.x += this.speedX
    this.y += this.speedY

    // Wrap around the screen
    if (this.x < 0) this.x = canvas.width
    if (this.x > canvas.width) this.x = 0
    if (this.y < 0) this.y = canvas.height
    if (this.y > canvas.height) this.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const stars: Star[] = []
    const numStars = 150 // Increased number of stars for a fuller effect

    function createStars() {
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star(canvas))
      }
    }

    function animateStars() {
      ctx!.fillStyle = "rgb(17, 24, 39)" // Solid dark background
      ctx!.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.update(canvas)
        star.draw(ctx!)
      })

      requestAnimationFrame(animateStars)
    }

    createStars()
    animateStars()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      stars.length = 0
      createStars()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10" />
}

