import React, { useRef, useCallback, useEffect } from "react";

const LineChart = ({ period }) => {
  const CHART_DATA = {
    "7d": {
      labels: ["Sel", "Rab", "Kam", "Jum", "Sab", "Min", "Sen"],
      data: [312, 445, 389, 521, 678, 412, 534],
    },
    "30d": {
      labels: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28"],
      data: [820, 940, 780, 1100, 980, 1340, 1180, 1520, 1340, 1680],
    },
    "90d": {
      labels: ["Jan", "Feb", "Mar", "Apr"],
      data: [8200, 9800, 11200, 12847],
    },
  };

  const canvasRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { labels, data } = CHART_DATA[period];
    const dpr = window.devicePixelRatio || 1;
    const W = canvas.offsetWidth;
    const H = 160;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    const pad = { t: 14, r: 10, b: 28, l: 38 };
    ctx.clearRect(0, 0, W, H);
    const max = Math.max(...data);

    for (let i = 0; i <= 4; i++) {
      const y = pad.t + (H - pad.t - pad.b) * (i / 4);
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(pad.l, y);
      ctx.lineTo(W - pad.r, y);
      ctx.stroke();
      const v = Math.round(max - (max / 4) * i);
      ctx.fillStyle = "rgba(255,255,255,0.18)";
      ctx.font = "9px DM Sans,sans-serif";
      ctx.textAlign = "right";
      ctx.fillText(
        v >= 1000 ? (v / 1000).toFixed(1) + "k" : v,
        pad.l - 5,
        y + 3,
      );
    }

    const xs = labels.map(
      (_, i) => pad.l + (i / (labels.length - 1)) * (W - pad.l - pad.r),
    );
    const ys = data.map((v) => pad.t + (1 - v / max) * (H - pad.t - pad.b));

    const g = ctx.createLinearGradient(0, pad.t, 0, H - pad.b);
    g.addColorStop(0, "rgba(200,255,0,0.18)");
    g.addColorStop(1, "rgba(200,255,0,0)");
    ctx.beginPath();
    ctx.moveTo(xs[0], H - pad.b);
    ctx.lineTo(xs[0], ys[0]);
    for (let i = 1; i < xs.length; i++) {
      const cx = (xs[i - 1] + xs[i]) / 2;
      ctx.bezierCurveTo(cx, ys[i - 1], cx, ys[i], xs[i], ys[i]);
    }
    ctx.lineTo(xs[xs.length - 1], H - pad.b);
    ctx.closePath();
    ctx.fillStyle = g;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(xs[0], ys[0]);
    for (let i = 1; i < xs.length; i++) {
      const cx = (xs[i - 1] + xs[i]) / 2;
      ctx.bezierCurveTo(cx, ys[i - 1], cx, ys[i], xs[i], ys[i]);
    }
    ctx.strokeStyle = "#C8FF00";
    ctx.lineWidth = 2.5;
    ctx.lineJoin = "round";
    ctx.stroke();

    xs.forEach((x, i) => {
      ctx.beginPath();
      ctx.arc(x, ys[i], 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#C8FF00";
      ctx.strokeStyle = "#080808";
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.font = "9px DM Sans,sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(labels[i], x, H - 7);
    });
  }, [period]);

  useEffect(() => {
    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: 160, display: "block" }}
    />
  );
};

export default LineChart;
