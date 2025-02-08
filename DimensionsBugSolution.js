```javascript
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [dimensions, setDimensions] = useState(undefined);

  useEffect(() => {
    const getDimensions = () => {
      const { width, height } = Dimensions.get('window');
      setDimensions({ width, height });
    };
    getDimensions();
    Dimensions.addEventListener('change', getDimensions);
    return () => Dimensions.removeEventListener('change', getDimensions);
  }, []);

  if (dimensions === undefined) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Screen Width: {dimensions.width}</Text>
      <Text>Screen Height: {dimensions.height}</Text>
    </View>
  );
};

export default DimensionsBugSolution;
```