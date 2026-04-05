import { collection, query, where, getDocs, getDoc, doc, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import { Page, Section } from '@/types';

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const q = query(collection(db, 'pages'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const pageDoc = querySnapshot.docs[0];
    return { id: pageDoc.id, ...pageDoc.data() } as Page;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getPageSections(sectionIds: string[]): Promise<Section[]> {
  try {
    if (!sectionIds || sectionIds.length === 0) return [];

    // To handle modular scaling, we fetch sections linked to the page
    // Note: Firestore doesn't support 'in' queries with more than 30 IDs, 
    // but for portfolio sections it's usually less.
    const sectionsRef = collection(db, 'sections');
    const q = query(sectionsRef, where('id', 'in', sectionIds));
    const querySnapshot = await getDocs(q);

    const sections = querySnapshot.docs.map(doc => ({
      ...doc.data(),
    })) as Section[];

    // Sort by order manually if required, or ensure and order was set
    return sections.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error fetching sections:', error);
    return [];
  }
}

// Fallback for development if no data in Firebase
export const mockPageData: Page = {
  id: 'home-page',
  slug: 'home',
  title: 'Welcome to Rishabh\'s Portfolio',
  sections: ['hero-1', 'about-1'],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const mockSectionsData: Section[] = [
  {
    id: 'hero-1',
    type: 'hero',
    order: 1,
    content: {
      title: 'Hi, I\'m Rishabh | Architecting the Future of Web',
      subtitle: 'Designing and building innovative, high-performance web experiences that empower businesses and users alike.',
      cta: 'Explore My Work',
    }
  },
  {
    id: 'about-1',
    type: 'about',
    order: 2,
    content: {
      heading: 'Crafting Digital Excellence',
      description: 'I am a passionate Full-Stack Developer specializing in modern web ecosystems. My approach combines technical precision with creative design to deliver scalable and intuitive solutions.',
      skills: ['React', 'Next.js', 'Typescript', 'Node.js', 'Firebase', 'Tailwind CSS', 'Framer Motion']
    }
  }
];
