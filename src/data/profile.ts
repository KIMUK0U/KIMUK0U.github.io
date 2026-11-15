export const profile = {
  name: 'Kota KIMURA',
  role: 'AI エンジニア / フルスタックエンジニア / 修士課程 / 28卒',
  role_en: 'ai engineer / full-stack engineer / research student',
  affiliation: '岐阜大学大学院自然科学技術研究科',
  affiliation_en: 'gifu university, graduate school of natural science and technology',
  github: 'https://github.com/KIMUK0U',
  email: 'kt2g.kimura@gmail.com',
  interests: ['画像認識', 'コンピュータビジョン', 'LLM', 'XR', 'Apple Vision Pro', '3D点群処理'],
  interests_en: ['image recognition', 'computer vision', 'llm', 'xr', 'apple vision pro', '3d point cloud'],
};

export const research = [
  {
    id: 'R-006',
    title_ja: '果樹の摘果・剪定アノテーションと継続学習（MirumeAI）',
    title_en: 'orchard thinning & pruning annotation with continual learning',
    description: 'MirumeAI のアルバイトで開発している Web アプリ。果樹の写真を開くと AI が果実・枝の輪郭と房ごとの「残す順位」を下書きし、人が番号や「切」の印で直してサーバーへ保存する。保存した修正データで AI を継続学習（DER++）し、組織ごとに版を持って切替・巻き戻しができる。PC でもスマホでも作業できる画面と、AWS のサーバーレス構成を作った。リポジトリは非公開のため、動画の代わりに GIF を掲載。',
    tags: ['Instance Segmentation', 'MMDetection', 'DINOv2', 'Continual Learning', 'React', 'FastAPI', 'AWS'],
    year: '2026',
    privateRepo: true,
    gif: {
      src: '/images/mirumeai/mirumeai-annotation.gif',
      alt: 'アプリ紹介のスライド。AI と人の作業の循環図、摘果の作業画面、スマホの作業画面、剪定の作業画面、摘果の継続学習の画面、AWS の構成図が、説明文付きで順に切り替わる',
    },
  },
  {
    id: 'R-000',
    title_ja: '生徒支援AI「ユメカタリ」',
    title_en: 'student support ai "yumekatari"',
    description: 'LLMを活用し、生徒の深刻な悩みを早期検知するシステムを開発。教師の負担軽減を目指したチーム開発プロジェクト。愛知の学生が選ぶ企業100選共同プロジェクト「ユメカタリ生成AIコンテスト」開発部門にて優秀賞を受賞。',
    tags: ['生成AI', 'LLM', 'チーム開発'],
    year: '2024',
    repo: 'https://github.com/Mugi323/student-support-ai',
    award: 'ユメカタリ生成AIコンテスト 開発部門優秀賞',
    contributed: true,
    video: '7IkSHao4BTA',
  },
  {
    id: 'R-005',
    title_ja: 'patch-align-mandible',
    title_en: 'text-guided 3d patch alignment for mandibular anatomy localization',
    description: '本リポジトリはpatch-align-3dを参考に作成されています。参考元: https://github.com/souhail-hadgi/PatchAlign3D。下顎骨点群の局所パッチと解剖学的テキスト記述を対照学習で対応付け、クエリに応じて3D形状上の該当領域を可視化する研究プロジェクト。Apple Vision Pro向けのvisionOSデモでは、学習済みモデルをCoreML/Swiftで動作させ、下顎骨モデル上に解剖構造検索結果をリアルタイム表示する。',
    tags: ['PatchAlign3D', '3D Point Cloud', 'Contrastive Learning', 'Mandible', 'Apple Vision Pro'],
    year: '2026-04',
    repo: 'https://github.com/KIMUK0U/patch-align-mandible',
    video: 'dWb9BIXHC7Q',
  },
  {
    id: 'R-004',
    title_ja: 'XR空間でのPointLLMを用いた解剖構造対話システム',
    title_en: 'pointllm-based anatomy chat in xr',
    description: 'PointLLMの動的着色機能で可視化した3D点群解剖モデルをXR空間に表示し、LLMと対話しながら解剖構造を学習・認識するシステム。',
    tags: ['PointLLM', 'Apple Vision Pro', 'LLM', '3D Point Cloud', 'visionOS'],
    year: '2025–2026',
    repo: 'https://github.com/KIMUK0U/InteractiveAnatomyChat',
    video: 'UfqtsDzRu2U',
  },
  {
    id: 'R-003',
    title_ja: 'CT画像由来の3D解剖モデルと頭部模型のAR重畳',
    title_en: 'ar overlay of ct-derived 3d anatomy on physical model',
    description: 'CT画像からセグメンテーションした解剖構造3Dモデルを、実物の頭部模型にAR技術でリアルタイム重畳表示。空間的な解剖理解を支援する。',
    tags: ['Apple Vision Pro', 'visionOS', 'Segmentation', 'AR', '3D Reconstruction'],
    year: '2025',
    repo: 'https://github.com/KIMUK0U/CTAndPhantomRegistrationProject',
    video: 'YEDly6YqrT8',
  },
  {
    id: 'R-002',
    title_ja: 'XR空間でのCTスライス画像の実物大可視化',
    title_en: 'full-scale ct slice visualization in xr',
    description: 'Apple Vision Pro を用いて、CT画像をリアルスケールでXR空間に投影し、スライス位置をリアルタイムに変更できるシステム。医学教育・手術計画への応用を目指す。',
    tags: ['Apple Vision Pro', 'visionOS', 'DICOM', 'XR'],
    year: '2024–2025',
    repo: 'https://github.com/KIMUK0U/VisionOS-CTSlice-Viewer',
    video: 'fO_nbQumDiA',
  },
  {
    id: 'R-001',
    title_ja: '顔認証を用いたエッジAI',
    title_en: 'edge ai with face recognition',
    description: 'エッジデバイス上でリアルタイム顔認証を実行するAIシステム。低遅延・低消費電力の推論パイプラインを設計・実装。',
    tags: ['Edge AI', 'Face Recognition', 'Computer Vision'],
    year: '2024',
    repo: 'https://github.com/KIMUK0U/Bus-Occupant-Detection',
  },
];

export const presentations = [
  {
    id: 'P-001',
    title_ja: 'スマートグラスを利用した実物頭部模型への歯科CBCT画像3D重畳表示',
    title_en: '3d overlay of dental cbct images on physical head model using smart glasses',
    event: '第10回 歯科AI研究会',
    event_en: '10th dental ai study group',
    date: '2025年8月',
    type: '口述発表（査読なし）',
    url: 'https://jdai.or.jp/2025/03/31/10th_study_group/',
  },
  {
    id: 'P-002',
    title_ja: 'XR空間における点群解剖モデルのLLM対話システム',
    title_en: 'llm dialogue system for point cloud anatomy in xr',
    event: '医用画像処理一般・メディカルイメージング連合フォーラム',
    event_en: 'medical imaging joint forum',
    date: '2026年3月',
    type: '口述発表（査読なし）',
    url: 'https://ken.ieice.org/ken/paper/20260306EcUA/',
  },
];

export const work = [
  {
    company: 'MirumeAI',
    company_en: 'mirumeai',
    url: 'https://mirumeai.com/',
    role: 'AI エンジニア / フルスタックエンジニア',
    role_en: 'ai engineer / full-stack engineer',
    type: 'アルバイト',
    type_en: 'part-time',
  },
];

export const skills = {
  current: ['Python', 'Swift', 'visionOS', '画像認識', 'LLM', 'Apple Vision Pro'],
  past: ['3DGS', 'モデリング', 'Apple DepthPro', 'DICOM処理', 'Unity', 'PyTorch'],
};
