import { useState } from "react";
import Icon from "@/components/ui/icon";

type Bullet = { icon: string; text: string };

type Slide = {
  id: number;
  label: string;
  tag: string;
  title: string;
  subtitle: string;
  body: string | null;
  accent: string | null;
  image: string;
  imageAlt: string;
  bg: string;
  accentColor: string;
  bullets: Bullet[] | null;
  isCover?: boolean;
  imageRight?: boolean;
  author?: string;
  grade?: string;
};

const IMG_COVER   = "https://cdn.poehali.dev/projects/9a217bb2-b82f-43d5-8006-c52255230c12/files/0dfa21b0-0af9-4f42-b342-799bedad4cb9.jpg";
const IMG_DEFINE  = "https://cdn.poehali.dev/projects/9a217bb2-b82f-43d5-8006-c52255230c12/files/74640b8c-33c6-4bf2-b07b-60dcbf32323a.jpg";
const IMG_CAUSES  = "https://cdn.poehali.dev/projects/9a217bb2-b82f-43d5-8006-c52255230c12/files/b9c99c7e-5f16-4c60-925e-a3336f2f239f.jpg";
const IMG_SYMPTOM = "https://cdn.poehali.dev/projects/9a217bb2-b82f-43d5-8006-c52255230c12/files/18b29c09-ece6-4894-986c-369f6d0907e4.jpg";
const IMG_PREVENT = "https://cdn.poehali.dev/projects/9a217bb2-b82f-43d5-8006-c52255230c12/files/17f374b1-3c8e-4507-bd5d-763a16e7ee97.jpg";

const slides = [
  {
    id: 0,
    label: "Слайд 1 из 5",
    tag: "ПРЕЗЕНТАЦИЯ",
    title: "Почечная недостаточность",
    subtitle: "Тема доклада",
    body: null,
    accent: null,
    image: IMG_COVER,
    imageAlt: "Почки человека",
    bg: "#0f172a",
    accentColor: "#60a5fa",
    isCover: true,
    imageRight: false,
    author: "Санжиева Виолетта",
    grade: "9Ж класс",
    bullets: null,
  },
  {
    id: 1,
    label: "Слайд 2 из 5",
    tag: "ОПРЕДЕЛЕНИЕ",
    title: "Почечная недостаточность",
    subtitle: "Что это такое?",
    body: "Синдром, при котором почки утрачивают способность очищать кровь, выводить токсины и поддерживать баланс жидкости в организме.",
    accent: "Острая или хроническая форма — оба состояния опасны для жизни.",
    image: IMG_DEFINE,
    imageAlt: "Анатомия почки, срез",
    bg: "#f8f9fb",
    accentColor: "#2563eb",
    imageRight: true,
    bullets: null,
  },
  {
    id: 2,
    label: "Слайд 3 из 5",
    tag: "ПРИЧИНЫ",
    title: "Почему развивается болезнь?",
    subtitle: "Основные факторы риска",
    body: null,
    accent: null,
    image: IMG_CAUSES,
    imageAlt: "Факторы риска почечной недостаточности",
    bg: "#f0f4ff",
    accentColor: "#1d4ed8",
    imageRight: false,
    bullets: [
      { icon: "Droplets", text: "Сахарный диабет — №1 причина в мире" },
      { icon: "Heart", text: "Артериальная гипертония (высокое давление)" },
      { icon: "Pill", text: "Злоупотребление обезболивающими и антибиотиками" },
      { icon: "AlertTriangle", text: "Хронические воспаления почек" },
      { icon: "Zap", text: "Острые отравления и травмы" },
    ],
  },
  {
    id: 3,
    label: "Слайд 4 из 5",
    tag: "СИМПТОМЫ",
    title: "Как распознать болезнь?",
    subtitle: "Тревожные признаки",
    body: null,
    accent: "При появлении этих симптомов — немедленно обратитесь к врачу!",
    image: IMG_SYMPTOM,
    imageAlt: "Симптомы почечной недостаточности",
    bg: "#fff8f0",
    accentColor: "#d97706",
    imageRight: true,
    bullets: [
      { icon: "Moon", text: "Отёки лица, ног и рук по утрам" },
      { icon: "Wind", text: "Постоянная усталость и одышка" },
      { icon: "EyeOff", text: "Изменение цвета и количества мочи" },
      { icon: "Thermometer", text: "Тошнота, потеря аппетита, зуд кожи" },
    ],
  },
  {
    id: 4,
    label: "Слайд 5 из 5",
    tag: "ПРОФИЛАКТИКА",
    title: "Как избежать болезни?",
    subtitle: "Простые правила защиты почек",
    body: null,
    accent: "Профилактика в 10 раз дешевле лечения.",
    image: IMG_PREVENT,
    imageAlt: "Здоровый образ жизни и почки",
    bg: "#f0fff4",
    accentColor: "#16a34a",
    imageRight: false,
    bullets: [
      { icon: "Droplet", text: "Пить 1.5–2 литра чистой воды в день" },
      { icon: "Apple", text: "Ограничить соль, сахар и жирную пищу" },
      { icon: "Activity", text: "Контролировать давление и уровень сахара" },
      { icon: "Ban", text: "Не принимать лекарства без назначения врача" },
      { icon: "Stethoscope", text: "Раз в год сдавать анализ мочи и крови" },
    ],
  },
];

const Index = () => {
  const [current, setCurrent] = useState(0);
  const slide = slides[current] as Slide;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: slide.bg,
        fontFamily: "'Montserrat', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "background 0.4s ease",
      }}
    >
      {/* Верхняя панель */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: slide.isCover ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 3,
            color: slide.accentColor,
            textTransform: "uppercase" as const,
          }}
        >
          {slide.tag}
        </span>
        <span style={{ fontSize: 13, color: "#94a3b8", fontFamily: "'IBM Plex Sans', sans-serif" }}>
          {slide.label}
        </span>
      </div>

      {/* Основной контент */}
      <div
        style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: slide.isCover ? "1fr" : "1fr 1fr",
          gap: 0,
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
          padding: "40px 40px 20px",
          alignItems: "center",
        }}
      >
        {slide.isCover && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 32 }}>
            <div style={{ position: "relative", width: 220, height: 220, borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 0 6px #60a5fa30, 0 20px 60px rgba(0,0,0,0.5)" }}>
              <img src={KIDNEY_IMG} alt="Почки" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 4, color: "#60a5fa", textTransform: "uppercase" as const, marginBottom: 16, fontFamily: "'IBM Plex Sans', sans-serif" }}>
                Медицина · Биология
              </div>
              <h1 style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, letterSpacing: -2, marginBottom: 20 }}>
                Почечная<br />недостаточность
              </h1>
              <p style={{ fontSize: "clamp(14px, 1.8vw, 20px)", color: "#94a3b8", fontFamily: "'IBM Plex Sans', sans-serif", marginBottom: 32, lineHeight: 1.5 }}>
                Определение · Причины · Профилактика
              </p>
              <div style={{ display: "inline-flex", flexDirection: "column", gap: 4, background: "#ffffff10", border: "1px solid #ffffff20", borderRadius: 16, padding: "16px 32px" }}>
                <span style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}>{slide.author}</span>
                <span style={{ fontSize: 14, color: "#60a5fa", fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.grade}</span>
              </div>
            </div>
          </div>
        )}
        {/* Картинка слева (если imageRight = false) */}
        {!slide.isCover && !slide.imageRight && (
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
            <img src={slide.image} alt={slide.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${slide.accentColor}20 0%, transparent 60%)` }} />
          </div>
        )}

        {/* Текст */}
        {!slide.isCover && <div style={{ paddingLeft: slide.imageRight ? 0 : 48, paddingRight: slide.imageRight ? 48 : 0 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 3,
              color: slide.accentColor,
              marginBottom: 16,
              textTransform: "uppercase" as const,
              fontFamily: "'IBM Plex Sans', sans-serif",
            }}
          >
            {slide.subtitle}
          </div>

          <h1
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 900,
              color: "#0f172a",
              lineHeight: 1.1,
              marginBottom: 28,
              letterSpacing: -1,
            }}
          >
            {slide.title}
          </h1>

          {slide.body && (
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                color: "#334155",
                lineHeight: 1.65,
                marginBottom: 24,
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontWeight: 400,
              }}
            >
              {slide.body}
            </p>
          )}

          {slide.bullets && (
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 24 }}>
              {slide.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: `${slide.accentColor}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={b.icon} size={20} style={{ color: slide.accentColor }} />
                  </div>
                  <span
                    style={{
                      fontSize: "clamp(14px, 1.6vw, 18px)",
                      color: "#1e293b",
                      fontFamily: "'IBM Plex Sans', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          )}

          {slide.accent && (
            <div
              style={{
                background: `${slide.accentColor}12`,
                border: `2px solid ${slide.accentColor}30`,
                borderRadius: 14,
                padding: "14px 20px",
                fontSize: "clamp(13px, 1.5vw, 17px)",
                color: slide.accentColor,
                fontWeight: 600,
                fontFamily: "'IBM Plex Sans', sans-serif",
                lineHeight: 1.5,
              }}
            >
              {slide.accent}
            </div>
          )}
        </div>}

        {/* Картинка справа (если imageRight = true) */}
        {!slide.isCover && slide.imageRight && (
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
            <img src={slide.image} alt={slide.imageAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: `linear-gradient(225deg, ${slide.accentColor}20 0%, transparent 60%)` }} />
          </div>
        )}
      </div>

      {/* Нижняя навигация */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px 32px",
          maxWidth: 1200,
          width: "100%",
          margin: "0 auto",
        }}
      >
        {/* Точки */}
        <div style={{ display: "flex", gap: 8 }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                background: i === current ? slide.accentColor : "#cbd5e1",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Кнопки */}
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={prev}
            disabled={current === 0}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 12,
              border: `2px solid ${current === 0 ? "#e2e8f0" : slide.accentColor}`,
              background: "transparent",
              color: current === 0 ? "#cbd5e1" : slide.accentColor,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: current === 0 ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            <Icon name="ChevronLeft" size={18} />
            Назад
          </button>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              borderRadius: 12,
              border: "none",
              background: current === slides.length - 1 ? "#e2e8f0" : slide.accentColor,
              color: current === slides.length - 1 ? "#94a3b8" : "#fff",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: current === slides.length - 1 ? "not-allowed" : "pointer",
              transition: "all 0.2s ease",
            }}
          >
            Вперёд
            <Icon name="ChevronRight" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;