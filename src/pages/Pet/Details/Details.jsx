import { useLocation } from "react-router-dom";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import stylesCSS from "./style.module.css";
import Button from "../../../components/Button/Button";
import { useState, useEffect } from "react";
import { convertImageToBase64 } from "../../../utils/convertImageBase64";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    padding: 30,
  },
  title: {
    fontSize: 32,
    color: "#D72631",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#D72631",
    marginBottom: 15,
  },
  contentWrapper: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 20,
    flexGrow: 1,
    flexShrink: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#003049",
    marginBottom: 3,
  },
  value: {
    fontSize: 14,
    marginBottom: 8,
    color: "#222",
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#003049",
    textAlign: "center",
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    textAlign: "center",
    color: "#222",
    marginBottom: 3,
  },
});

const PetPdfDocument = ({ pet, imageBase64 }) => {
  const title = pet?.situation?.toLowerCase().includes("tutor")
    ? "PROCURA-SE TUTOR"
    : "PROCURA-SE PET";

  const formatDate = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("pt-BR").format(new Date(date));
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.line} />

        <View style={styles.contentWrapper}>
          <Image src={imageBase64} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Nome:</Text>
            <Text style={styles.value}>{pet?.name || "-"}</Text>

            <Text style={styles.label}>Idade:</Text>
            <Text style={styles.value}>{pet?.age || "-"}</Text>

            <Text style={styles.label}>Raça:</Text>
            <Text style={styles.value}>{pet?.race || "-"}</Text>

            <Text style={styles.label}>Cor:</Text>
            <Text style={styles.value}>{pet?.color || "-"}</Text>

            <Text style={styles.label}>Cor dos olhos:</Text>
            <Text style={styles.value}>{pet?.eyesColor || "-"}</Text>

            <Text style={styles.label}>Espécie:</Text>
            <Text style={styles.value}>{pet?.species || "-"}</Text>

            <Text style={styles.label}>Gênero:</Text>
            <Text style={styles.value}>{pet?.gender || "-"}</Text>

            <Text style={styles.label}>Tamanho:</Text>
            <Text style={styles.value}>{pet?.size || "-"}</Text>

            <Text style={styles.label}>Data:</Text>
            <Text style={styles.value}>{formatDate(pet?.date)}</Text>

            <Text style={styles.label}>Comentário:</Text>
            <Text style={styles.value}>{pet?.comment || "-"}</Text>
          </View>
        </View>

        <Text style={styles.contactTitle}>Para contato:</Text>
        <Text style={styles.contactText}>Local: {pet?.local || "-"}</Text>
        <Text style={styles.contactText}>
          Ponto de Referência: {pet?.landmark || "-"}
        </Text>
        <Text style={styles.contactText}>
          Telefone: {pet?.phone || "Não informado"}
        </Text>
        <Text style={styles.contactText}>
          Recompensa: {pet?.reward || "Não informada"}
        </Text>
      </Page>
    </Document>
  );
};

const Details = () => {
  const location = useLocation();
  const { pet } = location.state;
  const [imageBase64, setImageBase64] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const url = `${process.env.REACT_APP_API}/images/pets/${pet?.images[0]}`;
      try {
        const base64 = await convertImageToBase64(url);
        setImageBase64(base64);
      } catch (error) {
        console.error("Erro ao converter a imagem!", error);
      }
    };

    loadImage();
  }, [pet]);

  function formatDate(pet) {
    const formatter = new Intl.DateTimeFormat("pt-BR");

    return formatter.format(new Date(pet));
  }

  return (
    <div>
      <h1>Detalhes do pet:</h1>
      <div className={stylesCSS.container}>
        <p>
          <span>Nome:</span> {pet?.name}
        </p>
        <p>
          <span>Idade:</span> {pet?.age}
        </p>
        <p>
          <span>Raça:</span> {pet?.race}
        </p>
        <p>
          <span>Cor:</span> {pet?.color}
        </p>
        <p>
          <span>Cor dos olhos:</span> {pet?.eyesColor}
        </p>
        <p>
          <span>Espécie:</span> {pet?.species}
        </p>
        <p>
          <span>Gênero:</span> {pet?.gender}
        </p>
        <p>
          <span>Tamanho:</span> {pet?.size}
        </p>
        <p>
          <span>Local:</span> {pet?.local}
        </p>
        <p>
          <span>Ponto de Referência:</span> {pet?.landmark}
        </p>
        <p>
          <span>Data:</span> {formatDate(pet?.date)}
        </p>
        <p>
          <span>Recompensa:</span> {pet?.reward}
        </p>
        <p>
          <span>Situação:</span> {pet?.situation}
        </p>
        <p>
          <span>Comentário:</span> {pet?.comment}
        </p>
        <img
          src={`${process.env.REACT_APP_API}/images/pets/${pet?.images[0]}`}
          alt=""
        />
        <Button>Entrar em contato</Button>

        {imageBase64 && (
          <PDFDownloadLink
            document={<PetPdfDocument pet={pet} imageBase64={imageBase64} />}
            fileName={`${pet?.name || "cartaz"}-procura.pdf`}
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              color: "#fff",
              backgroundColor: "#D72631",
              borderRadius: 5,
              fontWeight: "bold",
            }}
          >
            {({ loading }) =>
              loading ? "Carregando PDF..." : "Baixar Cartaz PDF"
            }
          </PDFDownloadLink>
        )}
      </div>
    </div>
  );
};

export default Details;
