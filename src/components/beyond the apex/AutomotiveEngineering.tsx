const AutomotiveEngineering = () => (
  <>
    <div className="manual_detail">
      <div className="content_header">
        <h1 className="bilingual-title"><span lang="en">Automotive Engineering</span><span className="bilingual-sep"> / </span><span lang="zh">汽车工程学</span></h1>
        <h2 className="bilingual-title"><span lang="en">Chapter 1 · Preface</span><span className="bilingual-sep"> / </span><span lang="zh">第1章 · 序文</span></h2>
      </div>
      <div className="body">
        <div className="bilingual">
          <p lang="en">
            Publications on automotive technology span a wide range of subjects, from dense engineering texts to catchy online tutorials aimed at everyday drivers. Yet a persistent gap remains between professional engineers and the general public, both in how deeply cars are understood and how clearly their systems are explained.
          </p>
          <p lang="zh">
            关于汽车技术的书籍很多，从面向普通人的汽车杂志，到专业人士使用的专业书，各种读物在世上广泛流传。然而，面向普通人讲述的汽车形象，与专业汽车工程师心中的汽车形象之间存在很大差异——这一点对不具备专门知识的普通人来说，几乎未被认识到。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            This book sets out to close that gap.
          </p>
          <p lang="zh">
            造成普通人与专业工程师心中汽车形象巨大差异的决定性原因，是有无工学基础知识。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Within these pages, we break down the core principles that guide professional automotive engineers, pairing them with stories and insights designed to engage readers at every level. The aim is simple: to give you a clearer understanding of how cars work, and, in turn, instill a greater appreciation for high-performance machines.
          </p>
          <p lang="zh">
            因此下面将解说专业汽车工程师所具备的工学基础知识，希望多少填补横亘两者之间的深深鸿沟。同时也会尽量穿插已有专业汽车工学知识的人也能乐在其中的话题，若能通读至最后，不胜荣幸。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Chapter One introduces the fundamentals: force, torque and energy, followed by an overview of vibration theory. These are the building blocks of engineering. Vibration, which we develop further in Chapter Two, sits at the heart of vehicle behavior, from how a chassis responds to load to how a suspension is tuned for performance.
          </p>
          <p lang="zh">
            第1章解说基本的机械力学：介绍力、力矩、能量的概念，并进入振动理论。力、力矩、能量是一切工学的基础；振动理论尤其是第2章所讲车辆运动力学以及悬架调校的基础。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Chapter Two moves into vehicle kinetics and suspension tuning. The goal is simple: show how professionals read and interpret suspension movement, and how those movements shape what the driver feels. You will be introduced to basic steering tests and to one of the industry’s most revealing tools, the seven-post rig, which allows engineers to study a car’s dynamic response in controlled conditions.
          </p>
          <p lang="zh">
            第2章解说车辆运动力学与悬架调校。希望读者了解专业人士如何把握车辆与悬架的运动。尤其是车辆操舵试验、以及用七柱试验台（7-post rig）解析悬架时的基础知识，请在此扎实学习。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Chapter Three shifts the focus to the engine, introducing the essentials of statistical mechanics and thermodynamics. What does theoretical efficiency look like? Why can no real engine achieve it? This chapter explores the physical limits that govern energy use and loss, grounding those answers in real-world phenomena.
          </p>
          <p lang="zh">
            第3章简单介绍作为汽车发动机基础的热力学与统计力学：达到理论效率的发动机是怎样的？为何实际发动机会发生能量损失而达不到理论效率？并解说作为能量损失而共同显现的自然面貌。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Chapter Four turns to aerodynamics. Bernoulli’s theorem, often cited to explain downforce and lift, provides a useful starting point, but it is only part of the story. Here, we go further, examining the broader principles that define airflow and the theoretical models that shape high-performance design.
          </p>
          <p lang="zh">
            第4章起解说空气动力学。表示压力与速度关系的伯努利定理，常被用来说明赛车下压力或飞机升力，对未学过流体力学的人也或许并不陌生；但伯努利定理不过是空气动力学的入口。这里将请你走入其后理论空气动力学的主干道。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            Chapter Five introduces computational fluid dynamics, or CFD. It is a cornerstone of modern automotive development and a familiar term in racing circles, where it plays a central role in shaping competitive machines. While its practical application remains the domain of specialists, this chapter offers a focused look at the theory behind it and how it guides design decisions.
          </p>
          <p lang="zh">
            第5章解说数值流体力学，即所谓 CFD。CFD 是汽车开发中不可或缺的工具，尤其在赛车开发中是最重要工具之一，因而在一般赛车迷之间「CFD」一词也已耳熟能详。但知道 CFD 究竟建立在何种理论之上的人，仅限于一部分专家。因此这里仅略微触及 CFD 理论的概念。
          </p>
        </div>

        <div className="bilingual">
          <p lang="en">
            The material in this book reflects the fundamentals expected of automotive engineers, but it can be demanding for readers new to the field. You do not need to read the chapters in order. Start where your interest takes you. At a minimum, this should open a window into a technical world that is rarely seen from the outside, one built and refined by professional engineers.
          </p>
          <p lang="zh">
            这里介绍的工学理论，对专业汽车工程师而言几乎都是基础。但对普通人来说多半陌生，有时从开头读到结尾会很困难。那时请先挑自己感兴趣的部分跳读。若能多少窥见一般汽车形象背后、那片仅专业人士知晓的广阔世界之一端，便深感欣慰。
          </p>
        </div>
      </div>
    </div>
  </>
);

export default AutomotiveEngineering;
