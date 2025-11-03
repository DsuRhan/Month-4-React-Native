// File: App.tsx
import React, { useState, useRef } from 'react';
import {
  ScrollView,
  FlatList,
  SectionList,
  RefreshControl,
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

/* ================== TYPE DEFINITIONS ================== */
interface ProductItem {
  id: string;
  title: string;
  price: string;
}

interface SectionItem {
  title: string;
  data: string[];
}

/* ================== MAIN COMPONENT ================== */
const App: React.FC = () => {
  /* ===== ScrollView Section ===== */
  const [scrollData, setScrollData] = useState<string[]>(['Banner 1', 'Banner 2', 'Banner 3']);
  const [scrollRefreshing, setScrollRefreshing] = useState<boolean>(false);

  const handleScrollRefresh = (): void => {
    setScrollRefreshing(true);
    setTimeout(() => {
      setScrollData((prev) => [...prev, `Banner ${prev.length + 1}`]);
      setScrollRefreshing(false);
    }, 1000);
  };

  /* ===== FlatList Section ===== */
  const [flatRefreshing, setFlatRefreshing] = useState<boolean>(false);
  const FLAT_DATA: ProductItem[] = Array.from({ length: 15 }, (_, i) => ({
    id: `item-${i + 1}`,
    title: `Produk ${i + 1}`,
    price: `${(i + 1) * 10000}`,
  }));

  const handleFlatRefresh = (): void => {
    setFlatRefreshing(true);
    setTimeout(() => {
      Alert.alert('Refreshed!', 'Daftar produk diperbarui.');
      setFlatRefreshing(false);
    }, 1200);
  };

  const getItemLayout = (_: any, index: number) => ({
    length: 70,
    offset: 70 * index,
    index,
  });

  const viewabilityConfig = { itemVisiblePercentThreshold: 40 };
  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<{ item: ProductItem }> }) => {
      if (viewableItems.length > 0) {
        console.log('Terlihat:', viewableItems[0].item.title);
      }
    }
  ).current;

  /* ===== SectionList Section ===== */
  const [sections, setSections] = useState<SectionItem[]>([
    { title: 'A', data: ['Apple', 'Avocado'] },
    { title: 'B', data: ['Banana', 'Blueberry'] },
    { title: 'C', data: ['Cherry', 'Coconut'] },
  ]);
  const [sectionRefreshing, setSectionRefreshing] = useState<boolean>(false);

  const handleSectionRefresh = (): void => {
    setSectionRefreshing(true);
    setTimeout(() => {
      setSections((prev) => [{ title: 'New', data: ['New Fruit'] }, ...prev]);
      setSectionRefreshing(false);
    }, 1000);
  };

  /* ===== Render Item (FlatList) ===== */
  const renderProduct: ListRenderItem<ProductItem> = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://picsum.photos/seed/${item.id}/100` }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardPrice}>Rp {item.price}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={scrollRefreshing}
          onRefresh={handleScrollRefresh}
          tintColor="#3b82f6"
          colors={['#3b82f6']}
          title="Refreshing banners..."
          titleColor="#3b82f6"
        />
      }
    >
      {/* SCROLLVIEW SECTION */}
      <Text style={styles.sectionTitle}>1️⃣ ScrollView - Banner List</Text>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.bannerContainer}
        removeClippedSubviews
        bounces
        overScrollMode="auto"
        scrollEnabled
        keyboardDismissMode="on-drag"
        onScroll={(e: NativeSyntheticEvent<NativeScrollEvent>) => {
          const offsetX = e.nativeEvent.contentOffset.x;
          if (offsetX % 300 === 0) console.log('Scrolled to banner');
        }}
        scrollEventThrottle={16}
      >
        {scrollData.map((item, index) => (
          <View key={index} style={styles.banner}>
            <Text style={styles.bannerText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/* FLATLIST SECTION */}
      <Text style={styles.sectionTitle}>2️⃣ FlatList - Daftar Produk</Text>
      <FlatList
        data={FLAT_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        numColumns={1}
        initialNumToRender={8}
        getItemLayout={getItemLayout}
        removeClippedSubviews
        refreshing={flatRefreshing}
        onRefresh={handleFlatRefresh}
        refreshControl={
          <RefreshControl
            refreshing={flatRefreshing}
            onRefresh={handleFlatRefresh}
            colors={['#06b6d4']}
            progressBackgroundColor="#f0f9ff"
          />
        }
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
        ListHeaderComponent={<Text style={styles.listHeader}>Daftar Produk</Text>}
        ListFooterComponent={<Text style={styles.listFooter}>-- Akhir Daftar --</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}/*Do not define components during render. React will see a new component type on every render and destroy the entire subtree’s DOM nodes and state (https://reactjs.org/docs/reconciliation.html#elements-of-different-types). Instead, move this component definition out of the parent component “App” and pass data as props. If you want to allow component creation in props, set allowAsProps option to true.*/
      />

      {/* SECTIONLIST SECTION */}
      <Text style={styles.sectionTitle}>3️⃣ SectionList - Daftar Buah</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>{item}</Text>
          </View>
        )}
        stickySectionHeadersEnabled
        refreshControl={
          <RefreshControl
            refreshing={sectionRefreshing}
            onRefresh={handleSectionRefresh}
            colors={['#16a34a']}
            progressBackgroundColor="#dcfce7"
          />
        }
        ItemSeparatorComponent={() => <View style={styles.sectionSeparator} />}/*Do not define components during render. React will see a new component type on every render and destroy the entire subtree’s DOM nodes and state (https://reactjs.org/docs/reconciliation.html#elements-of-different-types). Instead, move this component definition out of the parent component “App” and pass data as props. If you want to allow component creation in props, set allowAsProps option to true.*/
        ListEmptyComponent={<Text style={styles.emptyText}>Tidak ada data</Text>}
      />
    </ScrollView>
  );
};

export default App;

/* ================== STYLING ================== */
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    paddingBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    paddingHorizontal: 16,
    color: '#1e293b',
  },
  bannerContainer: {
    height: 180,
  },
  banner: {
    width: 300,
    height: 160,
    backgroundColor: '#e0f2fe',
    borderRadius: 16,
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  bannerText: {
    fontSize: 16,
    color: '#0369a1',
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontWeight: '600',
    color: '#0f172a',
  },
  cardPrice: {
    color: '#0ea5e9',
    fontSize: 13,
    marginTop: 4,
  },
  listHeader: {
    textAlign: 'center',
    paddingVertical: 8,
    fontWeight: 'bold',
    color: '#1d4ed8',
  },
  listFooter: {
    textAlign: 'center',
    paddingVertical: 8,
    color: '#94a3b8',
  },
  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginHorizontal: 16,
  },
  sectionHeader: {
    backgroundColor: '#f1f5f9',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    color: '#334155',
  },
  sectionItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  sectionItemText: {
    color: '#0f172a',
  },
  sectionSeparator: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginHorizontal: 16,
  },
  emptyText: {
    textAlign: 'center',
    padding: 16,
    color: '#64748b',
  },
});
