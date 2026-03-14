/**
 * INVISTA HOJE - Sales Landing Page
 * Design Philosophy: Financial Brutalism
 * - Sharp geometric layouts with asymmetric grid
 * - High contrast: Black (#000) + Cyan (#00FFFF) + Teal (#1A4D5C)
 * - Typography: Space Grotesk (display) + IBM Plex Sans (body) + JetBrains Mono (numbers)
 * - Instant feedback interactions, no smooth transitions
 * - Honest presentation of scarcity and social proof
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  TrendingUp, 
  BookOpen, 
  Target, 
  Shield, 
  Users,
  Clock,
  Star,
  ChevronDown,
  Smartphone,
  Tablet,
  Monitor,
  Award,
  Briefcase,
  Mail,
  CreditCard,
  Printer,
  FileText
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/O101016720K?off=ifylfz1r&hotfeature=51";

// Memoized testimonials data - moved outside component to prevent recreation
const TESTIMONIALS_DATA = [
  {
    name: "Fernanda Silva",
    role: "Estudante, 19 anos, São Paulo",
    content: "Antes de ler o Invista Hoje, eu não entendia nada sobre economia. Achava que investimento era coisa complicada e só para gente rica. Depois de ler o Capítulo 1 sobre Fundamentos, consegui entender como o dinheiro realmente funciona na prática — conceitos que nunca tinha visto na escola. Agora consigo ter conversas mais inteligentes sobre finanças com meus pais e amigos. Indico para todo jovem que quer começar a entender sobre dinheiro desde cedo.",
    topic: "Educação Financeira Básica"
  },
  {
    name: "Gabriel Rocha",
    role: "Programador Front-end, 21 anos, São Paulo",
    content: "Como desenvolvedor, eu entendia código, mas não entendia investimentos. Achava que era tudo muito teórico e desconectado da realidade. Depois de ler o Capítulo 3 com o guia prático passo a passo, consegui ver investimento como um projeto real — com objetivos claros e execução prática. A forma como o ebook explica é parecida com como a gente pensa em desenvolvimento. Recomendo para todo programador que quer aprender sobre investimentos de um jeito que faz sentido.",
    topic: "Investimento como Projeto Prático"
  },
  {
    name: "Malcolm Costa",
    role: "Programador Backend, 21 anos, São Paulo",
    content: "Eu sempre achei que investimento era arriscado demais e que era melhor deixar o dinheiro na poupança. Depois de ler o Capítulo 2 sobre Renda Fixa e Renda Variável, entendi a diferença entre os tipos de investimento e como cada um funciona. Aprendi que risco não significa perda garantida — é sobre entender o que você está fazendo. Indico para qualquer programador que quer entender investimentos sem medo e de forma técnica.",
    topic: "Compreensão de Riscos e Investimentos"
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = useMemo(() => TESTIMONIALS_DATA, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let attempts = 0;
    const maxAttempts = 20;
    
    const checkPixel = () => {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'ViewContent');
        clearInterval(interval);
      } else if (attempts < maxAttempts) {
        attempts++;
      } else {
        clearInterval(interval);
      }
    };
    
    interval = setInterval(checkPixel, 500);
    return () => clearInterval(interval);
  }, []);


  const scrollToPrice = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    document.getElementById('price-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckoutClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Scarcity Banner */}
      <div className="sticky top-0 z-50 bg-destructive border-b-4 border-primary overflow-hidden">
        <div className="container py-2 md:py-3 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 min-w-0 flex-1">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-mono font-bold text-white truncate sm:truncate md:text-left">
              ⚡ Promoção: de 37 por <span className="text-primary">19,90</span>. Tempo limitado
            </p>
          </div>
          <Badge variant="outline" className="bg-primary text-primary-foreground border-primary font-mono text-xs md:text-sm px-2 md:px-3 py-1 flex-shrink-0">
            <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            +150 leitores já organizaram suas finanças
          </Badge>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-background border-b-8 border-primary">
        <div className="container py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-8">
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl md:text-7xl font-display font-bold leading-none tracking-tight">
                  INVISTA HOJE:
                  <span className="block text-primary mt-1 md:mt-2">SEU GUIA DEFINITIVO</span>
                </h1>
                <div className="h-1 w-24 md:w-32 bg-primary"></div>
              </div>

              {/* Mobile Image - Below Title */}
              <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="relative md:hidden block" onClick={handleCheckoutClick}>
                <div className="border-4 border-primary p-2 bg-card max-w-xs hover:opacity-90 transition-opacity">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663277020619/muOFDXRHnzWruYQz.png" 
                    alt="Ebook Invista Hoje" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground px-2 py-1 font-mono font-bold text-xs border-4 border-background">
                  116 PÁG
                </div>
              </a>
              
              <p className="text-base md:text-2xl text-muted-foreground leading-relaxed">
                Aprenda a investir do zero — sem jargão, sem enrolação, sem precisar de muito dinheiro para começar
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Um guia completo e direto ao ponto para quem quer organizar as finanças e dar os primeiros passos nos investimentos — mesmo começando do absoluto zero
              </p>

              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <p className="text-sm md:text-lg">Passo a passo <strong>claro e prático</strong></p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <p className="text-sm md:text-lg">Transforme sua <strong>vida financeira</strong></p>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                  <p className="text-sm md:text-lg">Conquiste a <strong>liberdade</strong> que sempre sonhou</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto text-sm md:text-xl px-4 md:px-12 py-4 md:py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-4 border-primary shadow-[8px_8px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,255,255,0.3)] transition-all"
                asChild
              >
                <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCheckoutClick}>
                  QUERO O EBOOK POR R$ 19,90 →
                </a>
              </Button>
            </div>

            {/* Desktop Image - Right Side */}
             <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="relative hidden md:block" onClick={handleCheckoutClick}>
              <div className="border-4 md:border-8 border-primary p-2 md:p-4 bg-card hover:opacity-90 transition-opacity">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663277020619/muOFDXRHnzWruYQz.png" 
                  alt="Ebook Invista Hoje" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 font-mono font-bold text-lg border-4 border-background">
                116 PÁGINAS
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="bg-card border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-8 md:mb-12 px-2">
            VOCÊ ESTÁ CANSADO DE...
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto px-2 sm:px-0">
            {[
              { emoji: "😰", text: "Dívidas que parecem não ter fim, te sufocando e tirando o seu sono?" },
              { emoji: "😨", text: "Medo de começar a investir e perder dinheiro?" },
              { emoji: "😔", text: "Sensação de que a liberdade financeira é apenas para 'ricos'?" },
              { emoji: "😞", text: "Se sentir atrasado em relação às suas próprias conquistas quando se compara com outras pessoas?" }
            ].map((problem, idx) => (
              <Card key={idx} className="p-3 md:p-6 bg-background border-4 border-muted hover:border-primary transition-all">
                <div className="flex gap-2 md:gap-3 items-start">
                  <span className="text-2xl md:text-3xl flex-shrink-0">{problem.emoji}</span>
                  <p className="text-xs md:text-base leading-relaxed">{problem.text}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl md:text-3xl font-display font-bold text-primary">
              Se você se identificou com pelo menos uma dessas situações, o Invista Hoje foi escrito para você — do zero, na linguagem que faltou na sua educação financeira.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b-8 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-1 gap-8 md:gap-12 items-center">
            <div className="order-1 md:order-1 space-y-6 md:space-y-8 max-w-3xl mx-auto">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2">
                  INVISTA
                </h2>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary">
                  HOJE!
                </h2>
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                O Invista Hoje é a <span className="text-primary font-bold">resposta que você buscava!</span> Um guia completo, 
                descomplicado e prático, criado para te ajudar a:
              </p>

              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-4 p-4 md:p-5 bg-background border-4 border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                  <div className="text-3xl md:text-4xl">💰</div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Sair do Ciclo das Dívidas</h3>
                    <p className="text-sm md:text-base text-muted-foreground">De uma vez por todas, organize suas finanças</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 md:p-5 bg-background border-4 border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                  <div className="text-3xl md:text-4xl">📚</div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Entender Investimentos</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Do básico ao avançado, sem complicação</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 md:p-5 bg-background border-4 border-primary hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all">
                  <div className="text-3xl md:text-4xl">🎯</div>
                  <div>
                    <h3 className="font-bold text-base md:text-lg mb-1">Alcançar o Primeiro Milhão</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Construa um patrimônio sólido e duradouro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Method Section */}
      <section className="bg-card border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            COMO FUNCIONA O MÉTODO?
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto mb-12"></div>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {[
                {
                  step: "01",
                  title: "FUNDAMENTOS",
                  description: "Entenda como o dinheiro funciona, saia das dívidas e aprenda conceitos-chave de economia."
                },
                {
                  step: "02",
                  title: "UNIVERSO DOS INVESTIMENTOS",
                  description: "Aprenda sobre como os investimentos moldam nossas vidas, desde Títulos Públicos até ações bilionárias."
                },
                {
                  step: "03",
                  title: "PRÁTICA RUMO AO MILHÃO",
                  description: "Compreenda como investir na prática com um guia detalhado para alcançar seus objetivos."
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-4 md:p-6 bg-background border-4 border-primary relative overflow-hidden">
                  <div className="absolute top-0 right-0 text-[80px] md:text-[120px] font-display font-bold text-primary/10 leading-none">
                    {item.step}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2 md:mb-3">{item.step}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Button 
                size="lg" 
                className="w-full md:w-auto text-lg md:text-xl px-10 md:px-16 py-6 md:py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-4 border-primary shadow-[8px_8px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,255,255,0.3)] transition-all"
                asChild
              >
                <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCheckoutClick}>
                  QUERO O EBOOK POR R$ 19,90 →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
      {/* Ebook Index Section */}
      <section className="bg-background border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-center mb-4">
            O QUE VOCÊ VAI APRENDER
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">📖 CAPÍTULO 1: FUNDAMENTOS</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Como o dinheiro funciona na prática</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Saia das dívidas de forma definitiva</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Conceitos-chave de economia</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Planejamento financeiro pessoal</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">📊 CAPÍTULO 2: INVESTIMENTOS</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Títulos Públicos e Renda Fixa</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Renda Variável e Ações</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Diversificação de carteira</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Análise de riscos</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">🎯 CAPÍTULO 3: PRÁTICA</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Guia passo a passo para investir</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Cálculos e simulações práticas</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Jornada rumo ao primeiro milhão</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Exercícios de fixação</p>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">💡 BÔNUS EXCLUSIVOS</h3>
                <div className="space-y-2 text-sm md:text-base">
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Resumos em áudio dos capítulos</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Estudos de caso reais</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Exercícios práticos</p>
                  <p className="flex items-start gap-2"><span className="text-primary">✓</span> Suporte por email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="bg-background border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            SOBRE O AUTOR
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-4 border-primary">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 bg-primary/20 border-4 border-primary flex items-center justify-center flex-shrink-0">
                  <Award className="w-20 h-20 text-primary" />
                </div>
                
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-3xl font-display font-bold mb-2">Natã Lima de Sousa Silva</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                      <Briefcase className="w-5 h-5" />
                      <p className="font-mono text-base">Especialista em Educação Financeira</p>
                    </div>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Natã já ajudou centenas de pessoas a saírem das dívidas e construírem patrimônio através de métodos práticos e descomplicados. 
                    Sua missão é democratizar o acesso ao conhecimento sobre investimentos, tornando-o acessível para todos.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground">
                    O <span className="text-primary font-bold">Invista Hoje</span> é o resultado de experiência 
                    condensada em um guia objetivo, sem jargões complicados, focado em resultados reais para 
                    quem está começando do zero.
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
                    <Badge className="bg-primary/20 text-primary border-primary text-sm">
                      📊 Análise de Investimentos
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary text-sm">
                      💡 Educação Financeira
                    </Badge>
                    <Badge className="bg-primary/20 text-primary border-primary text-sm">
                      🎓 Mentor Certificado
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

            O QUE OS LEITORES DIZEM
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto mb-12"></div>

          {/* Carousel for Mobile/Tablet, Grid for Desktop */}
          <div className="max-w-6xl mx-auto">
            {/* Desktop Grid View */}
            <div className="hidden md:grid grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="p-6 bg-card border-4 border-muted hover:border-primary transition-colors">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6 italic">\"{testimonial.content}\"</p>
                  <div className="border-t-2 border-primary pt-4">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <Badge className="mt-2 bg-primary/20 text-primary border-primary">
                      {testimonial.topic}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            {/* Mobile/Tablet Carousel View */}
            <div className="md:hidden">
              <div className="relative">
                <Card className="p-8 bg-card border-4 border-primary animate-in fade-in duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed mb-6 italic">\"{testimonials[currentTestimonial].content}\"</p>
                  <div className="border-t-2 border-primary pt-4">
                    <p className="font-bold text-lg">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                    <Badge className="mt-2 bg-primary/20 text-primary border-primary">
                      {testimonials[currentTestimonial].topic}
                    </Badge>
                  </div>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between gap-4 mt-6">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary"
                    onClick={prevTestimonial}
                  >
                    ← Anterior
                  </Button>
                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          idx === currentTestimonial ? 'bg-primary' : 'bg-muted'
                        }`}
                        onClick={() => setCurrentTestimonial(idx)}
                      />
                    ))}
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary"
                    onClick={nextTestimonial}
                  >
                    Próximo →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Old Grid Code - Removed */}
          <div className="hidden">
            {[
              {
                name: "Fernanda Plansky",
                role: "Investidora Iniciante",
                content: "Finalmente consegui sair das dívidas seguindo o método do ebook! A linguagem é clara e os exercícios práticos me ajudaram a entender onde meu dinheiro estava indo. Em 3 meses já estava investindo em renda fixa.",
                topic: "Organização Financeira"
              },
              {
                name: "Gabriel Soares",
                role: "Analista de Sistemas",
                content: "Sempre achei que investir era complicado demais. O Invista Hoje desmistificou tudo! Aprendi sobre custo de oportunidade e como a renda variável pode acelerar meu patrimônio. Excelente conteúdo!",
                topic: "Renda Variável"
              },
              {
                name: "Malcolm de Mello",
                role: "Empreendedor",
                content: "Este guia mudou minha mentalidade sobre dinheiro. Os capítulos sobre títulos públicos e a jornada rumo ao milhão são ouro puro. Recomendo para qualquer pessoa que queira liberdade financeira de verdade.",
                topic: "Estratégia de Longo Prazo"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 bg-card border-4 border-muted hover:border-primary transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed mb-6 italic">\"{testimonial.content}\"</p>
                <div className="border-t-2 border-primary pt-4">
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <Badge className="mt-2 bg-primary/20 text-primary border-primary">
                    {testimonial.topic}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price-section" className="bg-card border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Cursos de educação financeira custam entre R$ 300 e R$ 2.000. Consultorias financeiras, R$ 200 por hora. O Invista Hoje entrega o essencial que você precisa para começar — por R$ 19,90 e acesso para sempre.
              </p>
              
              <div className="inline-block bg-destructive text-white px-8 py-3 font-mono font-bold text-xl mb-6 border-4 border-primary">
                POR TEMPO LIMITADO!
              </div>
              
              <div className="flex items-center justify-center gap-3 md:gap-6 mb-6 flex-wrap">
                <div className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">DE</p>
                  <p className="text-xl md:text-4xl font-mono font-bold line-through text-muted-foreground">R$ 37,00</p>
                </div>
                <div className="text-3xl md:text-6xl text-primary">→</div>
                <div className="text-center">
                  <p className="text-xs md:text-sm text-primary mb-1 md:mb-2">POR APENAS</p>
                  <p className="text-3xl md:text-7xl font-mono font-bold text-primary">R$ 19,90</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Pagamento único · Acesso imediato · Lê no celular, tablet ou computador
              </p>
            </div>

            {/* Bonuses */}
            <div className="bg-background border-4 border-primary p-8 mb-8">
              <h3 className="text-2xl font-display font-bold text-center mb-6">
                AO COMPRAR HOJE, VOCÊ GANHA <span className="text-primary">3 BÔNUS EXCLUSIVOS:</span>
              </h3>
              
              <div className="space-y-6">
                <div className="p-6 bg-card border-l-4 border-primary">
                  <p className="font-bold text-lg mb-2">🎧 BÔNUS 1 — Resumos em áudio</p>
                  <p className="text-muted-foreground leading-relaxed">Cada capítulo do ebook condensado em áudio de 5 a 8 minutos. Ideal para ouvir no trânsito, na academia ou onde preferir. Formato MP3, acesso imediato junto com o ebook.</p>
                </div>
                <div className="p-6 bg-card border-l-4 border-primary">
                  <p className="font-bold text-lg mb-2">📋 BÔNUS 2 — Estudos de caso reais</p>
                  <p className="text-muted-foreground leading-relaxed">Dois casos detalhados: uma pessoa saindo de dívidas no cartão de crédito e outra construindo sua primeira carteira de renda fixa do zero. Com os números reais e os erros que cometeram no caminho.</p>
                </div>
                <div className="p-6 bg-card border-l-4 border-primary">
                  <p className="font-bold text-lg mb-2">✏️ BÔNUS 3 — Exercícios práticos por capítulo</p>
                  <p className="text-muted-foreground leading-relaxed">Fichas de exercício para aplicar o que aprendeu em cada etapa — orçamento pessoal, simulação de investimentos e planejamento de metas. Em PDF, para imprimir ou preencher no computador.</p>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-background border-4 border-primary p-8 mb-8">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663277020619/wXnhmtKYWPiYdxWS.png" 
                alt="Garantia 7 Dias" 
                className="w-32 h-32"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-display font-bold mb-2">
                  <span className="text-primary">7 DIAS</span> DE GARANTIA!
                </h3>
                <p className="text-lg leading-relaxed">
                  Seu dinheiro de volta, <strong>sem perguntas</strong>, em até 7 dias se não gostar do conteúdo!
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="w-full text-2xl px-12 py-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-4 border-primary shadow-[12px_12px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(0,255,255,0.3)] transition-all mb-6"
              asChild
            >
              <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={handleCheckoutClick}>
                QUERO O EBOOK POR R$ 19,90 →
              </a>
            </Button>

            <div className="text-center space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <p>Seus dados 100% protegidos</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <p>Pagamento seguro via Hotmart</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <p>Aprovação instantânea</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Compatibility */}
      <section className="bg-background border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            ACESSE EM QUALQUER DISPOSITIVO
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto">
            {[
              { icon: Smartphone, label: "Smartphone" },
              { icon: Tablet, label: "Tablet" },
              { icon: Monitor, label: "Computador" }
            ].map((device, idx) => (
              <div key={idx} className="text-center p-4 md:p-6 bg-card border-4 border-primary hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 bg-primary/10 border-4 border-primary flex items-center justify-center">
                  <device.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <p className="font-bold text-base md:text-lg text-primary">{device.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card border-b-8 border-primary">
        <div className="container py-16 md:py-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="h-2 w-24 bg-primary mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "❓ Este guia é para quem ainda tem dívidas ou só para quem já está estável?",
                answer: "Para os dois. O Capítulo 1 começa exatamente com quem está endividado — mostrando como organizar as finanças antes de pensar em investir. Você não precisa estar 'pronto' para começar a ler.",
                icon: BookOpen
              },
              {
                question: "❓ Precisa ter muito dinheiro para colocar em prática o que ensina?",
                answer: "Não. O guia foi pensado para quem começa com pouco. No Capítulo 3 mostramos como investir com valores a partir de R$ 30 no Tesouro Direto — o investimento mais seguro do Brasil.",
                icon: Mail
              },
              {
                question: "❓ Qual a diferença disso para o que já tem grátis no YouTube?",
                answer: "Conteúdo gratuito no YouTube é disperso, sem sequência e frequentemente misturado com indicações de corretoras. O Invista Hoje é um percurso estruturado do zero ao avançado, sem interrupção e sem conflito de interesse — você paga uma vez e lê no seu ritmo.",
                icon: CreditCard
              },
              {
                question: "❓ Funciona para quem não entende nada de economia?",
                answer: "Esse é exatamente o público. Não há fórmulas complexas, siglas sem explicação nem pressuposto de conhecimento prévio. Cada conceito é explicado antes de ser usado.",
                icon: Printer
              },
              {
                question: "❓ E se eu não gostar?",
                answer: "Sete dias de garantia total. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do valor sem perguntas — é uma obrigação legal pelo Código de Defesa do Consumidor, e a cumprimos rigorosamente.",
                icon: FileText
              }
            ].map((faq, idx) => {
              const IconComponent = faq.icon;
              return (
                <Card 
                  key={idx} 
                  className="bg-background border-4 border-muted hover:border-primary hover:shadow-[0_0_20px_rgba(47,88,100,0.3)] transition-all duration-300 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-12 h-12 bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0 rounded">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">{faq.question}</h3>
                      </div>
                      <ChevronDown 
                        className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                          openFaq === idx ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {openFaq === idx && (
                      <div className="mt-4 animate-in fade-in duration-300">
                        <p className="text-muted-foreground leading-relaxed border-t-2 border-primary pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-primary">
        <div className="container py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Invista Hoje © 2025 - TODOS OS DIREITOS RESERVADOS
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            @invistahoje01
          </p>
        </div>
      </footer>
    </div>
  );
}
