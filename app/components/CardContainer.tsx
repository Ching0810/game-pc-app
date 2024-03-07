'use client'
import React, {useState, useEffect, useRef, useCallback} from 'react'
import Card from './Card'
import SwitchButton from './SwitchButton'
import data from './data.json'
import Hammer from 'hammerjs'

export interface DataItem {
  id: string,
  type: string,
  name: string,
  imagePath: string,
  specs: string[],
  discount: number,
  price: number,
  originPrice: number,
  monthlyPrice: number,
  delivery: string,
  button: string,
}

// container for cards
const CardContainer = () => {
  // state variable
  const [page, setPage] = useState(0)
  const [currentData, setCurrentData] = useState<DataItem[]>([])
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate the total number of items
  const itemCount = data.length

  const handleNext = useCallback(() => {
    const itemsPerPage = isSmallScreen ? 1 : 4;
    const nextPageIndex = (page + 1) * itemsPerPage;

    if (nextPageIndex < itemCount) {
      setPage(page + 1);
    }
  }, [page, isSmallScreen, itemCount])

  const handlePrev = useCallback(() => {
    if (page < 1) {
      return;
    }
    setPage(page - 1);
  }, [page])

  const hammerManagerRef = useRef<InstanceType<typeof Hammer.Manager> | null>(null);

  // effect to trigger swipe event
  useEffect(() => {
    const loadHammer = async () => {
      if (typeof window !== 'undefined') {
        const Hammer = (await import('hammerjs')).default;
        if (cardRef.current) {
          const manager = new Hammer.Manager(cardRef.current);
          const swipe = new Hammer.Swipe();
          manager.add(swipe);
          manager.on('swipe', (event) => {
            if (event.direction === Hammer.DIRECTION_LEFT) {
              handlePrev();
              console.log('swipe left');
            } else if (event.direction === Hammer.DIRECTION_RIGHT) {
              handleNext();
              console.log('swipe right');
            }
          });
          hammerManagerRef.current = manager; // Store the manager instance in a ref
        }
      }
    };

    loadHammer();

    return () => {
      if (hammerManagerRef.current) {
        hammerManagerRef.current.destroy();
      }
    };
  }, [page, isSmallScreen, handlePrev, handleNext]);// Ensure handlePrev and handleNext are included in the dependency array


  // effect to determine data for RWD render
  useEffect(() => {
    // Function to update currentData based on screen size
    const updateCurrentData = () => {
      if (isSmallScreen) {
        setCurrentData(data.slice(page, page + 1));
      } else {
        setCurrentData(data.slice(page * 4, page * 4 + 4));
      }
    };

    // Initial data setting
    updateCurrentData();

    // Add resize event listener
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth < 768;
      setIsSmallScreen(newIsSmallScreen);
      updateCurrentData(); // Update currentData immediately based on the new value
    };

    // Update isSmallScreen state based on window width
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    checkScreenSize(); // Initial check

    // Cleanup on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [page, isSmallScreen]);

  useEffect(() => {
    // Reset page to 0 when isSmallScreen changes
    setPage(0);
  }, [isSmallScreen]);

  return (
    <div className='flex flex-col space-y-2'>
      {isSmallScreen?
        null:
        <div className='flex justify-end'>
          <SwitchButton page={page} setPage={setPage}/>
        </div>
      }
      <div className='flex flex-wrap justify-between space-x-4 w-full' ref={cardRef}>
        <Card currentData={currentData}/>
      </div>
    </div>
  )
}

export default CardContainer