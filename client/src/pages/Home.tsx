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
  Briefcase
} from "lucide-react";
import { useState } from "react";

const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/O101016720K?off=ifylfz1r&hotfeature=51&_hi=eyJjaWQiOiIxNzM2MDQwODc2OTcxNzA3NTgyNTY2MzQ4ODgwMDAwIiwiYmlkIjoiMTczNjA0MDg3Njk3MTcwNzU4MjU2NjM0ODg4MDAwMCIsInNpZCI6IjgyYzU5ODRmYjQ3NDQzMDhiNjMzNDBmYTQzNWY2MzFlIn0.1767495396013";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToPrice = () => {
    document.getElementById('price-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky Scarcity Banner */}
      <div className="sticky top-0 z-50 bg-destructive border-b-4 border-primary overflow-hidden">
        <div className="container py-2 md:py-3 flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 md:gap-3">
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3 min-w-0 flex-1">
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse flex-shrink-0" />
            <p className="text-xs sm:text-sm md:text-base font-mono font-bold text-white truncate sm:truncate md:text-left">
              ⚡ PROMOÇÃO: Apenas <span className="text-primary">10 ebooks</span> restantes!
            </p>
          </div>
          <Badge variant="outline" className="bg-primary text-primary-foreground border-primary font-mono text-xs md:text-sm px-2 md:px-3 py-1 flex-shrink-0">
            <Users className="w-3 h-3 md:w-4 md:h-4 mr-1" />
            150+
          </Badge>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-background border-b-8 border-primary">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-display font-bold leading-none tracking-tight">
                  INVISTA HOJE:
                  <span className="block text-primary mt-2">SEU GUIA DEFINITIVO</span>
                </h1>
                <div className="h-1 w-32 bg-primary"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Saia das dívidas e alcance o <span className="text-primary font-bold">primeiro milhão</span> — 
                mesmo que você nunca tenha investido antes.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Passo a passo <strong>claro e prático</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Transforme sua <strong>vida financeira</strong></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg">Conquiste a <strong>liberdade</strong> que sempre sonhou</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full md:w-auto text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold border-4 border-primary shadow-[8px_8px_0px_0px_rgba(0,255,255,0.3)] hover:shadow-[4px_4px_0px_0px_rgba(0,255,255,0.3)] transition-all"
                onClick={scrollToPrice}
              >
                SIM! EU QUERO LIBERDADE FINANCEIRA!
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="border-8 border-primary p-4 bg-card">
                <img 
                  src="/images/invista-hoje-sales-page-hero.png" 
                  alt="Ebook Invista Hoje" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 font-mono font-bold text-lg border-4 border-background">
                116 PÁGINAS
              </div>
            </div>
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
              SE VOCÊ RESPONDEU "SIM" PARA ALGUMAS DESSAS PERGUNTAS...
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
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 hidden md:block">
              <img 
                src="/images/invista-hoje-sales-page-success.png" 
                alt="Sucesso Financeiro" 
                className="w-full h-auto border-4 border-primary shadow-[0_0_30px_rgba(0,255,255,0.3)]"
              />
            </div>
            
            <div className="order-1 md:order-2 space-y-6 md:space-y-8">
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
                <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  COMEÇAR MINHA JORNADA AGORA!
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
                    Natã dedica sua carreira a democratizar o acesso ao conhecimento sobre investimentos. 
                    Formado em Economia e certificado como analista de investimentos, ele já ajudou milhares 
                    de pessoas a saírem das dívidas e construírem patrimônio através de métodos práticos e descomplicados.
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <p className="text-lg leading-relaxed mb-6 italic">"{testimonial.content}"</p>
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
              <div className="inline-block bg-destructive text-white px-8 py-3 font-mono font-bold text-xl mb-6 border-4 border-primary">
                POR TEMPO LIMITADO!
              </div>
              
              <div className="flex items-center justify-center gap-6 mb-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">DE</p>
                  <p className="text-4xl font-mono font-bold line-through text-muted-foreground">R$ 37,00</p>
                </div>
                <div className="text-6xl text-primary">→</div>
                <div className="text-center">
                  <p className="text-sm text-primary mb-2">POR APENAS</p>
                  <p className="text-6xl md:text-7xl font-mono font-bold text-primary">R$ 19,90</p>
                </div>
              </div>
            </div>

            {/* Bonuses */}
            <div className="bg-background border-4 border-primary p-8 mb-8">
              <h3 className="text-2xl font-display font-bold text-center mb-6">
                AO COMPRAR HOJE, VOCÊ GANHA <span className="text-primary">3 BÔNUS EXCLUSIVOS:</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { title: "BÔNUS 1", description: "Resumos em áudio de cada capítulo!" },
                  { title: "BÔNUS 2", description: "Estudos de caso exclusivos sobre renda fixa e variável!" },
                  { title: "BÔNUS 3", description: "Exercícios de fixação para aprimorar o conhecimento!" }
                ].map((bonus, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-card border-l-4 border-primary">
                    <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{bonus.title}</p>
                      <p className="text-muted-foreground">{bonus.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantee */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-background border-4 border-primary p-8 mb-8">
              <img 
                src="/images/invista-hoje-sales-page-guarantee.png" 
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
              <a href="https://pay.hotmart.com/your-checkout-link" target="_blank" rel="noopener noreferrer">
                EU QUERO MEU EBOOK AGORA!
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

          <div className="flex flex-wrap justify-center gap-12">
            {[
              { icon: Smartphone, label: "Smartphone" },
              { icon: Tablet, label: "Tablet" },
              { icon: Monitor, label: "Computador" }
            ].map((device, idx) => (
              <div key={idx} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-card border-4 border-primary flex items-center justify-center">
                  <device.icon className="w-12 h-12 text-primary" />
                </div>
                <p className="font-bold text-lg">{device.label}</p>
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
                question: "O ebook foi escrito para qual público?",
                answer: "O Invista Hoje foi criado especialmente para iniciantes que nunca investiram ou têm pouco conhecimento sobre o mercado financeiro. Se você quer sair das dívidas e começar a construir patrimônio, este guia é para você!"
              },
              {
                question: "Não estou achando o email com os dados de acesso ao ebook, o que eu faço?",
                answer: "Verifique sua caixa de spam ou lixo eletrônico. O email vem de 'Hotmart' com o assunto contendo 'Invista Hoje'. Se ainda não encontrar, entre em contato com o suporte da Hotmart através da área de compras."
              },
              {
                question: "Comprei o ebook por boleto, quanto tempo demora para reconhecer a compra?",
                answer: "Pagamentos por boleto podem levar até 3 dias úteis para serem confirmados pelo banco. Assim que o pagamento for identificado, você receberá automaticamente o acesso ao ebook por email."
              },
              {
                question: "Imprimi o ebook e ele ficou menor do que a folha. E agora?",
                answer: "Nas configurações de impressão, ajuste a opção de escala para 'Ajustar à página' ou '100%'. Certifique-se de que a orientação está em 'Retrato' e o tamanho do papel é A4."
              },
              {
                question: "Não estou conseguindo abrir o ebook, o que eu faço?",
                answer: "O ebook está em formato PDF. Certifique-se de ter um leitor de PDF instalado (Adobe Reader, Foxit, ou visualizador do navegador). Se o problema persistir, tente baixar novamente o arquivo através do link no email de confirmação."
              }
            ].map((faq, idx) => (
              <Card 
                key={idx} 
                className="bg-background border-4 border-muted hover:border-primary transition-colors cursor-pointer"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-bold text-lg flex-1">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {openFaq === idx && (
                    <p className="mt-4 text-muted-foreground leading-relaxed border-t-2 border-primary pt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </Card>
            ))}
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
