export const template = (fullname: String) => `
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.10/dist/htmx.min.js" integrity="sha384-H5SrcfygHmAuTDZphMHqBJLc3FhssKjG7w/CeCpFReSfwBWDTKpkzPP8c+cLsK+V" crossorigin="anonymous"></script>
<title>Certificate of Completion – Sycamore Consult Limited</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #1a1a2e;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    padding: 30px 20px;
  }

  .cert-wrapper {
    position: relative;
    width: 900px;
    max-width: 100%;
  }

  /* ── OUTER FRAME ── */
  .outer-frame {
    background: linear-gradient(135deg, #1c3a2a 0%, #0f2218 50%, #1c3a2a 100%);
    padding: 6px;
    border-radius: 4px;
    box-shadow:
      0 0 0 1px #2d6a4f,
      0 0 40px rgba(45, 106, 79, 0.4),
      0 30px 80px rgba(0,0,0,0.6);
  }

  /* ── GOLD BORDER LAYER ── */
  .gold-frame {
    background: linear-gradient(135deg, #c9a84c 0%, #f5d06a 25%, #c9a84c 50%, #f5d06a 75%, #c9a84c 100%);
    padding: 3px;
    border-radius: 2px;
  }

  /* ── INNER CERTIFICATE BODY ── */
  .cert-body {
    background: #fdfaf4;
    padding: 0;
    border-radius: 1px;
    position: relative;
    overflow: hidden;
  }

  /* Background watermark pattern */
  .cert-body::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent 0px,
        transparent 28px,
        rgba(45, 106, 79, 0.025) 28px,
        rgba(45, 106, 79, 0.025) 29px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent 0px,
        transparent 28px,
        rgba(45, 106, 79, 0.025) 28px,
        rgba(45, 106, 79, 0.025) 29px
      );
    pointer-events: none;
    z-index: 0;
  }

  /* ── TOP BANNER ── */
  .top-banner {
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #1b5e35 0%, #2e7d52 40%, #1b5e35 100%);
    padding: 22px 50px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #c9a84c;
  }

  .logo-container {
    width: 90px;
    height: 90px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3), 0 0 0 2px #c9a84c;
    flex-shrink: 0;
  }

  .logo-container img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  .org-header {
    text-align: center;
    flex: 1;
    padding: 0 24px;
  }

  .org-name {
    font-family: 'Cinzel', serif;
    font-size: 22px;
    font-weight: 700;
    color: #f5d06a;
    letter-spacing: 3px;
    text-transform: uppercase;
    line-height: 1.2;
    text-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }

  .org-tagline {
    font-family: 'Lato', sans-serif;
    font-size: 10.5px;
    font-weight: 300;
    color: rgba(255,255,255,0.75);
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-top: 5px;
  }

  .cert-number {
    font-family: 'Lato', sans-serif;
    font-size: 9px;
    color: rgba(255,255,255,0.5);
    letter-spacing: 1px;
    margin-top: 8px;
    font-weight: 300;
  }

  /* ── CORNER ORNAMENTS ── */
  .corner-ornament {
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    opacity: 0.65;
  }

  .corner-ornament svg { width: 100%; height: 100%; }

  /* ── MAIN CONTENT ── */
  .cert-content {
    position: relative;
    z-index: 1;
    padding: 42px 70px 36px;
    text-align: center;
  }

  .cert-title-label {
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: #2e7d52;
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .cert-title {
    font-family: 'Cinzel', serif;
    font-size: 40px;
    font-weight: 600;
    color: #1b3a28;
    letter-spacing: 2px;
    line-height: 1.1;
    margin-bottom: 6px;
  }

  .cert-subtitle {
    font-family: 'Cinzel', serif;
    font-size: 18px;
    font-weight: 400;
    color: #c9a84c;
    letter-spacing: 4px;
    margin-bottom: 36px;
  }

  /* Gold divider */
  .gold-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 0 auto 34px;
  }

  .gold-divider::before,
  .gold-divider::after {
    content: '';
    display: block;
    height: 1px;
    width: 120px;
    background: linear-gradient(90deg, transparent, #c9a84c, transparent);
  }

  .gold-diamond {
    width: 8px;
    height: 8px;
    background: #c9a84c;
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .presented-to {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: #666;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  /* ── NAME PLACEHOLDER ── */
  .recipient-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 52px;
    font-weight: 600;
    font-style: italic;
    color: #1b3a28;
    border-bottom: 2px solid #c9a84c;
    display: inline-block;
    min-width: 500px;
    padding: 4px 30px 10px;
    margin-bottom: 8px;
    line-height: 1.1;
    position: relative;
		text-transform: capitalize;
  }

  .recipient-hint {
    font-family: 'Lato', sans-serif;
    font-size: 9.5px;
    color: #b0956a;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 36px;
    font-style: italic;
  }

  .completion-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px;
    font-weight: 300;
    color: #444;
    line-height: 1.7;
    max-width: 620px;
    margin: 0 auto 10px;
  }

  .completion-text strong {
    font-weight: 600;
    color: #1b3a28;
    font-style: italic;
  }

  /* ── COURSE BLOCK ── */
  .course-block {
    background: linear-gradient(135deg, #f0f7f3 0%, #e8f4ed 100%);
    border: 1px solid #b8dfc9;
    border-left: 4px solid #2e7d52;
    padding: 18px 36px;
    margin: 28px auto;
    max-width: 580px;
    border-radius: 2px;
    position: relative;
  }

  .course-label {
    font-family: 'Lato', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #2e7d52;
    margin-bottom: 6px;
  }

  .course-name {
    font-family: 'Cinzel', serif;
    font-size: 17px;
    font-weight: 600;
    color: #1b3a28;
    letter-spacing: 1px;
  }

  .course-meta {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 10px;
  }

  .meta-item {
    text-align: center;
  }

  .meta-label {
    font-family: 'Lato', sans-serif;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 2px;
  }

  .meta-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 14px;
    font-weight: 600;
    color: #2e7d52;
  }

  /* ── DECORATIVE SEAL AREA ── */
  .seal-band {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin: 24px auto 28px;
  }

  .seal-line {
    height: 1px;
    width: 80px;
    background: linear-gradient(90deg, transparent, #c9a84c);
  }
  .seal-line.right { background: linear-gradient(90deg, #c9a84c, transparent); }

  .seal-circle {
    width: 56px;
    height: 56px;
    border: 2px solid #c9a84c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #fff9ed 0%, #fdf3d8 100%);
    box-shadow: 0 2px 8px rgba(201, 168, 76, 0.3);
  }

  .seal-inner {
    font-family: 'Cinzel', serif;
    font-size: 7px;
    color: #c9a84c;
    text-align: center;
    letter-spacing: 0.5px;
    font-weight: 600;
    line-height: 1.4;
  }

  /* ── SIGNATURE SECTION ── */
  .signature-section {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 10px 80px 10px;
    gap: 40px;
    position: relative;
  }

  .signature-block {
    text-align: center;
    flex: 1;
  }

  .sig-name-line {
    width: 100%;
    height: 1.5px;
    background: linear-gradient(90deg, transparent 0%, #333 20%, #333 80%, transparent 100%);
    margin-bottom: 8px;
  }

  .sig-cursive {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-style: italic;
    font-weight: 600;
    color: #1b3a28;
    margin-bottom: 2px;
    line-height: 1;
  }

  .sig-name {
    font-family: 'Lato', sans-serif;
    font-size: 10.5px;
    font-weight: 700;
    color: #1b3a28;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }

  .sig-title {
    font-family: 'Lato', sans-serif;
    font-size: 9px;
    color: #888;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .sig-divider {
    width: 1px;
    height: 60px;
    background: linear-gradient(180deg, transparent, #c9a84c, transparent);
    flex-shrink: 0;
    align-self: center;
    margin-bottom: 20px;
  }

  /* ── DATE BLOCK ── */
  .date-block {
    text-align: center;
    flex: 1;
  }

  .date-placeholder {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 300;
    color: #555;
    border-bottom: 1.5px solid #888;
    padding-bottom: 4px;
    margin-bottom: 8px;
    min-width: 160px;
    display: inline-block;
    font-style: italic;
  }

  .date-label {
    font-family: 'Lato', sans-serif;
    font-size: 9px;
    color: #888;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 300;
  }

  /* ── BOTTOM BANNER ── */
  .bottom-banner {
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #1b5e35 0%, #2e7d52 40%, #1b5e35 100%);
    border-top: 3px solid #c9a84c;
    padding: 10px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bottom-text {
    font-family: 'Lato', sans-serif;
    font-size: 8.5px;
    color: rgba(255,255,255,0.6);
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: 300;
  }

  .bottom-dots {
    display: flex;
    gap: 6px;
    align-items: center;
  }

  .dot {
    width: 4px;
    height: 4px;
    background: #c9a84c;
    border-radius: 50%;
  }

  .dot.large {
    width: 6px;
    height: 6px;
  }

  /* ── PRINT BUTTON (screen only) ── */
  .print-controls {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .btn {
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 28px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-print {
    background: linear-gradient(135deg, #2e7d52, #1b5e35);
    color: white;
    box-shadow: 0 4px 12px rgba(45,106,79,0.4);
  }

  .btn-print:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(45,106,79,0.5); }

  @media print {
    body { background: white; padding: 0; }
    .cert-wrapper { width: 100%; }
    .outer-frame { box-shadow: none; }
    .print-controls { display: none; }
  }
</style>
</head>
<body>

<div class="cert-wrapper">
  <!-- OUTER FRAME -->
  <div class="outer-frame">
    <div class="gold-frame">
      <div class="cert-body">

        <!-- TOP BANNER -->
        <div class="top-banner">
          <div class="corner-ornament">
            <svg viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5 L5 35 Q5 5 35 5 Z" fill="#c9a84c" opacity="0.5"/>
              <path d="M5 5 L65 5 L65 15 Q35 15 15 35 L5 35 Z" fill="#c9a84c" opacity="0.3"/>
              <rect x="5" y="5" width="60" height="2" fill="#c9a84c"/>
              <rect x="5" y="5" width="2" height="60" fill="#c9a84c"/>
              <path d="M5 5 L25 5 L5 25 Z" fill="#c9a84c" opacity="0.2"/>
              <circle cx="5" cy="5" r="4" fill="#c9a84c"/>
            </svg>
          </div>

          <div class="org-header">
            <div class="org-name">Sycamore Consult Limited</div>
            <div class="org-tagline">Training &amp; Consulting Excellence</div>
            <div class="cert-number">Certificate No: SCL / &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>

          <div class="logo-container">
            <img src="data:image/jpeg;base64,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" alt="Sycamore Consult Logo" />
          </div>
        </div>

        <!-- MAIN CONTENT -->
        <div class="cert-content">

          <div class="cert-title-label">This is to certify that</div>

          <!-- RECIPIENT NAME PLACEHOLDER -->
          <div class="recipient-name">${fullname}</div>
          <div class="recipient-hint">Insert participant's full name above</div>

          <div class="presented-to">Has successfully completed</div>

          <!-- COURSE BLOCK -->
          <div class="course-block">
            <div class="course-label">Programme / Course</div>
            <div class="course-name">Cybersecurity Awareness Training</div>
            <div class="course-meta">
              <div class="meta-item">
                <div class="meta-label">Duration</div>
                <div class="meta-value">2 Hours</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Delivery Mode</div>
                <div class="meta-value">Instructor-Led</div>
              </div>
              <div class="meta-item">
                <div class="meta-label">Year</div>
                <div class="meta-value">2026</div>
              </div>
            </div>
          </div>

          <div class="completion-text">
            Having demonstrated commitment to professional development and met all
            requirements set by <strong>Sycamore Consult Limited</strong>, this certificate
            is awarded in recognition of the successful completion of the above programme.
          </div>

          <!-- DECORATIVE SEAL -->
          <div class="seal-band">
            <div class="seal-line"></div>
            <div class="seal-circle">
              <div class="seal-inner">SCL<br>CERTIFIED</div>
            </div>
            <div class="seal-line right"></div>
          </div>

          <!-- SIGNATURES -->
          <div class="signature-section">
            <!-- Signature -->
            <div class="signature-block">
              <div class="sig-cursive">Audrey Mwala</div>
              <div class="sig-name-line"></div>
              <div class="sig-name">Audrey Mwala</div>
              <div class="sig-title">Managing Director</div>
            </div>

            <div class="sig-divider"></div>

            <!-- Date -->
            <div class="date-block">
              <div class="date-placeholder">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div style="height:8px"></div>
              <div class="date-label">Date of Issue</div>
            </div>
          </div>

        </div>
        <!-- end cert-content -->

        <!-- BOTTOM BANNER -->
        <div class="bottom-banner">
          <div class="bottom-text">Sycamore Consult Limited &nbsp;|&nbsp; Blantyre, Malawi</div>
          <div class="bottom-dots">
            <div class="dot"></div>
            <div class="dot large"></div>
            <div class="dot"></div>
          </div>
          <div class="bottom-text">Building Capability &nbsp;|&nbsp; Driving Excellence</div>
        </div>

      </div><!-- cert-body -->
    </div><!-- gold-frame -->
  </div><!-- outer-frame -->

  <!-- PRINT BUTTON -->
  <div class="print-controls">
    <button class="btn btn-print" onclick="window.print()">🖨 Print / Save as PDF</button>
  </div>
</div>

</body>
</html>
`
